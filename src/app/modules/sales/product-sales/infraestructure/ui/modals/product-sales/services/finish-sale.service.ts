import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FinishSaleService {
    private finishSaleSource = new Subject<boolean>();
    finishSale$ = this.finishSaleSource.asObservable();

    constructor() {}
    confirmFinishSale(finish: boolean) {
        this.finishSaleSource.next(finish);
    }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { payed } from '../../../models/product-added.model';

@Injectable({
    providedIn: 'root',
})
export class FinishSaleService {
    private finishSaleSource = new Subject<{ payed: payed; finish: boolean }>();
    finishSale$ = this.finishSaleSource.asObservable();

    constructor() {}
    confirmFinishSale(payed: payed, finish: boolean) {
        this.finishSaleSource.next({ payed, finish });
    }
}

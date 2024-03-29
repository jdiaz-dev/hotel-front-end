import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HoustingIdService {
    private houstingIdSource = new Subject<number>();
    productId$ = this.houstingIdSource.asObservable();

    constructor() {}
    sendProductId(productId: number) {
        this.houstingIdSource.next(productId);
    }
}

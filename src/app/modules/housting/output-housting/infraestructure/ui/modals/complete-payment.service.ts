import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';

@Injectable({
    providedIn: 'root',
})
export class CompletePaymentService {
    private paymentHoustingToCompleteSource = new Subject<number>();
    paymentHoustingToComplete$ = this.paymentHoustingToCompleteSource.asObservable();

    private paymentProductSaledToCompleteSource = new Subject<IProductsSaled[]>();
    paymentProductSalesToCompleteSource$ = this.paymentProductSaledToCompleteSource.asObservable();

    sendPaymentHoustingToComplete(payment: number) {
        this.paymentHoustingToCompleteSource.next(payment);
    }
    sendPaymentProductSaledToComplet(products: IProductsSaled[]) {
        this.paymentProductSaledToCompleteSource.next(products);
    }
}

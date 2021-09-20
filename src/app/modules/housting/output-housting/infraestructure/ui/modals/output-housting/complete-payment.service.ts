import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { IPaymentHoustingToCompletePID } from './interfaces-pid/payment-housting-to-complete';
import { IPaymentProductSaledToCompletePID } from './interfaces-pid/payment-product-saled-to-complete';
import { ISavePaymentsPID } from './interfaces-pid/save-payments';

@Injectable({
    providedIn: 'root',
})
export class CompletePaymentService
    implements IPaymentHoustingToCompletePID, IPaymentProductSaledToCompletePID, ISavePaymentsPID
{
    private paymentHoustingToCompleteSource = new Subject<number>();
    paymentHoustingToComplete$: Observable<number> = this.paymentHoustingToCompleteSource.asObservable();

    private paymentProductSaledToCompleteSource = new Subject<IProductsSaled[]>();
    paymentProductSalesToComplete$: Observable<IProductsSaled[]> =
        this.paymentProductSaledToCompleteSource.asObservable();

    private savePaymentSource = new Subject<boolean>();
    savePayment$: Observable<boolean> = this.savePaymentSource.asObservable();

    sendPaymentHoustingToComplete(payment: number) {
        this.paymentHoustingToCompleteSource.next(payment);
    }
    sendPaymentProductSaledToComplet(products: IProductsSaled[]) {
        this.paymentProductSaledToCompleteSource.next(products);
    }
    savePayment(save: boolean) {
        this.savePaymentSource.next(save);
    }
}

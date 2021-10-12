import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { IPaymentHoustingToCompletePID } from './interfaces-pid/payment-housting-to-complete';
import { IPaymentProductSaledToCompletePID } from './interfaces-pid/payment-product-saled-to-complete';
import { ISavePaymentsPID } from './interfaces-pid/save-payments';
import { IFinishProductsPaymentPID } from './interfaces-pid/finish-products-payment';

@Injectable({
    providedIn: 'root',
})
export class CompletePaymentService
    implements
        IPaymentHoustingToCompletePID,
        IPaymentProductSaledToCompletePID,
        ISavePaymentsPID,
        IFinishProductsPaymentPID
{
    private paymentHoustingToCompleteSource = new Subject<number>();
    paymentHoustingToComplete$: Observable<number> = this.paymentHoustingToCompleteSource.asObservable();

    private paymentProductSaledToCompleteSource = new Subject<IProductsSaled[]>();
    paymentProductSalesToComplete$: Observable<IProductsSaled[]> =
        this.paymentProductSaledToCompleteSource.asObservable();

    private saveHoustingPaymentSource = new Subject<boolean>();
    saveHoustingPayment$: Observable<boolean> = this.saveHoustingPaymentSource.asObservable();

    private finishProductsPaymentSource = new Subject<boolean>();
    finishProductsPayment$: Observable<boolean> = this.finishProductsPaymentSource.asObservable();

    sendPaymentHoustingToComplete(payment: number): void {
        this.paymentHoustingToCompleteSource.next(payment);
    }
    sendPaymentProductSaledToComplet(products: IProductsSaled[]): void {
        this.paymentProductSaledToCompleteSource.next(products);
    }
    saveHoustingPayment(save: boolean): void {
        this.saveHoustingPaymentSource.next(save);
    }

    finishProductsPayment(save: boolean): void {
        this.finishProductsPaymentSource.next(save);
    }
}

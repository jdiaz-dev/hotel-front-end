import { Observable } from 'rxjs';

export interface IFinishProductsPaymentPID {
    finishProductsPayment$: Observable<boolean>;
    finishProductsPayment(save: boolean): void;
}

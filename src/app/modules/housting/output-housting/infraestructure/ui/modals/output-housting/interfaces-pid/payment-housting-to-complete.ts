import { Observable } from 'rxjs';

export interface IPaymentHoustingToCompletePID {
    paymentHoustingToComplete$: Observable<number>;
    sendPaymentHoustingToComplete(payment: number): void;
}

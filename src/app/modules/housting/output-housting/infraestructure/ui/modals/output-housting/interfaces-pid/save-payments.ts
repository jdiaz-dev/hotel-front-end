import { Observable } from 'rxjs';

export interface ISavePaymentsPID {
    saveHoustingPayment$: Observable<boolean>;
    saveHoustingPayment(save: boolean): void;
}

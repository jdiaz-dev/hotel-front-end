import { Observable } from 'rxjs';

export interface ISavePaymentsPID {
    savePayment$: Observable<boolean>;
    savePayment(save: boolean): void;
}

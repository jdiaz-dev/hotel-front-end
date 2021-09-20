import { Observable } from 'rxjs';

export interface ICompleteProductSaledPaymentPort {
    completeProductSaledPayment(houstingId: number, productSaledId: number): Observable<any>;
}

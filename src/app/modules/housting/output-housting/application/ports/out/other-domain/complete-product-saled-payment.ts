import { Observable } from 'rxjs';

export interface ICompleteProductSaledPaymentPort {
    completeProductSaledPayment(houstingId: number, productSaledIds: number[]): Observable<any>;
}

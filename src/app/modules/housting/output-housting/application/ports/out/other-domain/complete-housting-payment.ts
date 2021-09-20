import { Observable } from 'rxjs';

export interface ICompleteHoustingPaymentPort {
    updateMoneyPaid(houstingId: number, clientId: number, roomId: number, moneyToAdd: number): Observable<any>;
    finishHousting(houstingId: number, clientId: number, roomId: number): Observable<any>;
}

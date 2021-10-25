import { Observable } from 'rxjs';
import { ICashClosed } from '../../../adapters/interfaces/cash-close';

export interface ICloseCashRequest {
    closeTheCash(cashId: number): Observable<ICashClosed>;
}

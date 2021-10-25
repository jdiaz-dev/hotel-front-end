import { CashData } from 'src/app/modules/cash/adapters/interfaces/cash-data';
import { Observable } from 'rxjs';

export interface GetCashNotClosedForSharedDomain {
    getCashNotClosed(): Observable<CashData>;
}

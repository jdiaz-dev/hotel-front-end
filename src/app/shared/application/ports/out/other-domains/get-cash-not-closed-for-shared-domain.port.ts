import { CashData } from "src/app/modules/cash/infraestructure/interfaces/cash-data";
import { Observable } from 'rxjs';

export interface GetCashNotClosedForSharedDomain {
    getCashNotClosed():Observable<CashData>
}
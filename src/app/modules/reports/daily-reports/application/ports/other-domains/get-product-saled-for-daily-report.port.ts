import { Observable } from 'rxjs';
import { ISaleReportResponse } from '../../../infraestructure/interfaces/sale-report';

export interface IGetProductsSaledForDailyReportPort {
    getProductsSaledForReport(): Observable<ISaleReportResponse>;
}

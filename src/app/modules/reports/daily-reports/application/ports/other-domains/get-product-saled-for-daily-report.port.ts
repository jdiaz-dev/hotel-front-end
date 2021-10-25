import { Observable } from 'rxjs';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { ISaleReportResponse } from '../../../infraestructure/interfaces/sale-report';

export interface IGetProductsSaledForDailyReportPort {
    getProductsSaledForReport(queries: IQueries): Observable<ISaleReportResponse>;
}

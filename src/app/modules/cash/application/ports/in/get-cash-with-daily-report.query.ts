import { Observable } from 'rxjs';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { ICashWithDailyReportResponse } from '../../../adapters/interfaces/cash-with-daily-report-response';

export interface IGetCashWithDailyReportQuery {
    getTheCashWithDailyReport(queries: IQueries): Observable<ICashWithDailyReportResponse>;
}

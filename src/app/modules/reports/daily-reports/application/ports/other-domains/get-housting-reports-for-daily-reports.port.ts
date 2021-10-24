import { Observable } from 'rxjs';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { IEndHoustingReportResponse } from '../../../../housting-report/infraestructure/interfaces/housting-report';

export interface IGetHoustingReportsForDailyReportPort {
    getHoustingReport(queries: IQueries): Observable<IEndHoustingReportResponse>;
}

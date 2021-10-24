import { Observable } from 'rxjs';
import { IDailyReport } from '../../../infraestructure/interfaces/daily-report';

export interface IGetDailyReportPort {
    getTheDailyReport(): Observable<IDailyReport>;
}

import { Observable } from 'rxjs';

export interface IGetHoustingReportPort {
    getHoustingReport(): Observable<any>;
}

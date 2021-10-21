import { Observable } from 'rxjs';

export interface IGetProductsSaledForDailyReportPort {
    getProductsSaledForReport(): Observable<any>;
}

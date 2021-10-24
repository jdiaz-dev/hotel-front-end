import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ChangeReportService {
    private changeReportSource = new Subject<number>();
    changeReport$ = this.changeReportSource.asObservable();

    changeReport(reportId: number) {
        this.changeReportSource.next(reportId);
    }
}

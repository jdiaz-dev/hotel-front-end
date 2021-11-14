import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ChangeReportService } from '../change-report.service';
import { Subscription } from 'rxjs';
import { IGetDailyReportPort } from '../../../../application/ports/other-domains/get-daily-report.port';
import { DailyReportService } from '../../../out/daily-report.service';
import { IDailyReport } from '../../../interfaces/daily-report';

@Component({
    selector: 'app-reports',
    templateUrl: './report-collection.component.html',
    styleUrls: ['./report-collection.component.scss'],
})
export class ReportCollectionComponent implements OnInit, AfterViewInit, OnDestroy {
    private getDailyReportPort: IGetDailyReportPort;
    currentReport!: number;
    changeReportSubs!: Subscription;
    dailyReport!: IDailyReport;

    constructor(private changeReportService: ChangeReportService, dailyReportService: DailyReportService) {
        this.getDailyReportPort = dailyReportService;
    }

    ngOnInit(): void {
        this.loadDailyReport();
        this.loadCurrentReport();
    }
    ngAfterViewInit(): void {}
    ngOnDestroy(): void {
        this.changeReportSubs.unsubscribe();
    }
    loadCurrentReport() {
        this.changeReportSubs = this.changeReportService.changeReport$.subscribe((reportId: number) => {
            this.currentReport = reportId;
        });
    }
    loadDailyReport() {
        this.getDailyReportPort.getTheDailyReport().subscribe((response: IDailyReport) => {
            // console.log(response);
            this.dailyReport = response;
        });
    }
}

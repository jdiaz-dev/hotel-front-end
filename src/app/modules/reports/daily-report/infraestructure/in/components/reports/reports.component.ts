import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ChangeReportService } from '../change-report.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit, AfterViewInit, OnDestroy {
    currentReport!: number;
    changeReportSubs!: Subscription;
    constructor(private changeReportService: ChangeReportService) {}

    ngOnInit(): void {}
    ngAfterViewInit(): void {
        this.loadCurrentReport();
    }
    ngOnDestroy(): void {
        this.changeReportSubs.unsubscribe();
    }
    loadCurrentReport() {
        this.changeReportSubs = this.changeReportService.changeReport$.subscribe((reportId: number) => {
            console.log('-----------reportId', reportId);
            this.currentReport = reportId;
        });
    }
}

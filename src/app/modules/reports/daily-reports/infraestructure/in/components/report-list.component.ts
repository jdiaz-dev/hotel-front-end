import { Component, OnInit } from '@angular/core';
import { ChangeReportService } from './change-report.service';
import { IReportList } from '../../interfaces/report-list';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
    reportList: IReportList[] = [
        { id: 1, nameReport: 'Reporte de hospedamiento' },
        { id: 2, nameReport: 'Reporte de ventas' },
    ];
    activeLink!: string;

    constructor(private readonly changeReportService: ChangeReportService) {}
    ngOnInit(): void {
        this.activeLink = this.reportList[0].nameReport;
        this.changeReport(this.reportList[0].id);
    }

    changeReport(reportId: number) {
        // console.log('-----------reportId', reportId);
        this.changeReportService.changeReport(reportId);
    }
}

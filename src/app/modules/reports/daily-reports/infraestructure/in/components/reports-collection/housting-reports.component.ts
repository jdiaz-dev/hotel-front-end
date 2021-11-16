import { Component, OnInit, OnDestroy } from '@angular/core';
import { IGetHoustingReportsForDailyReportPort } from '../../../../application/ports/other-domains/get-housting-reports-for-daily-reports.port';
import { HoustingReportService } from '../../../../../housting-report/infraestructure/out/housting-report.service';
import { Subscription } from 'rxjs';
import {
    IEndHoustingReport,
    IEndHoustingReportResponse,
} from '../../../../../housting-report/infraestructure/interfaces/housting-report';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

@Component({
    selector: 'app-housting-reports',
    templateUrl: './housting-reports.component.html',
    styleUrls: ['./housting-reports.component.scss'],
})
export class HoustingReportsComponent extends BasePaginator implements OnInit, OnDestroy {
    private getHoustingReportsForDailyReport: IGetHoustingReportsForDailyReportPort;
    private getHoustingReportSubs!: Subscription;
    houstingReports: IEndHoustingReport[] = [];
    totalHoustingReports!: number;
    displayedColumns: string[] = [
        'N',
        'Room',
        'MoneyPaid',
        'MoneyService',
        'Total',
        'EntryDate',
        'EntryTime',
        'OutputDate',
        'OutputTime',
    ];

    constructor(houstingReportService: HoustingReportService) {
        super();
        this.getHoustingReportsForDailyReport = houstingReportService;
    }

    ngOnInit(): void {
        this.loadHoustingReports();
    }
    ngOnDestroy(): void {
        this.getHoustingReportSubs.unsubscribe();
    }
    private loadHoustingReports(offset?: number) {
        let queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
        };

        this.getHoustingReportSubs = this.getHoustingReportsForDailyReport
            .getHoustingReport(queries)
            .subscribe((response: IEndHoustingReportResponse) => {
                //console.log('----------daily report', response);
                this.totalHoustingReports = response.count;
                this.houstingReports = response.rows;
                console.log(this.houstingReports);
            });
    }
    loadNextHoustingReports(offset: number) {
        this.loadHoustingReports(offset);
    }
}

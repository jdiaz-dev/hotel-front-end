import { Component, OnInit, Input } from '@angular/core';
import { IGetCashWithDailyReportQuery } from 'src/app/modules/cash/application/ports/in/get-cash-with-daily-report.query';
import { CashService } from 'src/app/modules/cash/adapters/out/cash.service';
import {
    ICashesWithDailyReports,
    ICashWithDailyReportResponse,
} from '../../../interfaces/cash-with-daily-report-response';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';

@Component({
    selector: 'app-cashes-closed-list',
    templateUrl: './cashes-closed-list.component.html',
    styleUrls: ['./cashes-closed-list.component.scss'],
})
export class CashesClosedListComponent extends BasePaginator implements OnInit {
    private getCashWithDailyReport: IGetCashWithDailyReportQuery;
    closingMoney!: number;
    cashesWithDailyReports!: ICashesWithDailyReports[];
    totalCashes!: number;
    displayedColumns: string[] = [
        'N',
        'OpeningMoney',
        'MoneyHousting',
        'MoneySales',
        'ClosingMoney',
        'OpeningDate',
        'ClosingDate',
        'Closed',
    ];

    @Input('cashMode') cashMode!: string;

    constructor(cashService: CashService) {
        super();
        this.getCashWithDailyReport = cashService;
    }
    ngOnInit(): void {
        this.loadCashWithDailyReport();
    }
    loadCashWithDailyReport(offset?: number) {
        let queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
        };

        this.getCashWithDailyReport
            .getTheCashWithDailyReport(queries)
            .subscribe((response: ICashWithDailyReportResponse) => {
                // console.log(response);
                this.totalCashes = response.count;
                this.cashesWithDailyReports = response.rows;

                this.closingMoney = this.cashesWithDailyReports[0].closed
                    ? 0
                    : this.cashesWithDailyReports[0].closingMoney;
            });
    }
    reloadCashesClosedList(event?: boolean) {
        if (event) this.loadCashWithDailyReport();
    }
    loadNextCashes(offset: number) {
        this.loadCashWithDailyReport(offset);
    }
}

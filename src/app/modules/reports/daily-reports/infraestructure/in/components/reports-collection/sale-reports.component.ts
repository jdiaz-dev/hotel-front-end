import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSaledService } from 'src/app/modules/sales/product-sales/infraestructure/out/product-sales.service';
import { IGetProductsSaledForDailyReportPort } from '../../../../application/ports/other-domains/get-product-saled-for-daily-report.port';
import { Subscription } from 'rxjs';
import { ISaleReport, ISaleReportResponse } from '../../../interfaces/sale-report';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';

@Component({
    selector: 'app-sale-reports',
    templateUrl: './sale-reports.component.html',
    styleUrls: ['./sale-reports.component.scss'],
})
export class SaleReportsComponent extends BasePaginator implements OnInit, OnDestroy {
    private getProductsSaledForDailyReportPort: IGetProductsSaledForDailyReportPort;
    private getProductsSaled!: Subscription;
    saleReports: ISaleReport[] = [];
    totalSaleReports!: number;
    displayedColumns: string[] = ['N', 'Room', 'Product', 'Amount', 'Price', 'Total', 'SaleDate', 'SaleTime'];

    constructor(productSaledService: ProductSaledService) {
        super();
        this.getProductsSaledForDailyReportPort = productSaledService;
    }

    ngOnInit(): void {
        this.loadProductSaledReport();
    }
    ngOnDestroy(): void {
        this.getProductsSaled.unsubscribe();
    }
    private loadProductSaledReport() {
        this.getProductsSaled = this.getProductsSaledForDailyReportPort
            .getProductsSaledForReport()
            .subscribe((response: ISaleReportResponse) => {
                console.log(response);
                this.saleReports = response.rows;
            });
    }
    loadNextSaleReports(offset: number) {}
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSaledService } from 'src/app/modules/sales/product-sales/infraestructure/out/product-sales.service';
import { IGetProductsSaledForDailyReportPort } from '../../../../application/ports/other-domains/get-product-saled-for-daily-report.port';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sale-reports',
    templateUrl: './sale-reports.component.html',
    styleUrls: ['./sale-reports.component.scss'],
})
export class SaleReportsComponent implements OnInit, OnDestroy {
    private getProductsSaledForDailyReportPort: IGetProductsSaledForDailyReportPort;
    private getProductsSaled!: Subscription;
    constructor(productSaledService: ProductSaledService) {
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
            .subscribe((response) => {
                console.log(response);
            });
    }
}

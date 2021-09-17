import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { ProductSalesService } from 'src/app/modules/sales/product-sales/infraestructure/out/product-sales.service';
import { GetProductSalesForOutputHoustingDomainPort } from '../../../application/ports/out/other-domain/get-product-sales-for-output-housting-domain.port';

@Component({
    selector: 'app-product-saled-report',
    templateUrl: './product-saled-report.component.html',
    styleUrls: ['./product-saled-report.component.scss'],
})
export class ProductSaledReportComponent implements OnChanges {
    @Input('houstingId') houstingId!: number;
    private getProductSalesForOutputHoustingDomainPort: GetProductSalesForOutputHoustingDomainPort;
    columnsProductsSaled: string[] = ['NameProduct', 'Price', 'Amount', 'State', 'TotalPrice'];
    productsSaled!: IProductsSaled[];

    constructor(productSalesService: ProductSalesService) {
        this.getProductSalesForOutputHoustingDomainPort = productSalesService;
    }
    ngOnChanges() {
        this.loadProductsSaled();
    }
    loadProductsSaled() {
        this.getProductSalesForOutputHoustingDomainPort
            .getProductSales(this.houstingId)
            .subscribe((response: IProductsSaled[]) => {
                console.log(response);
                this.productsSaled = response;
            });
    }
}

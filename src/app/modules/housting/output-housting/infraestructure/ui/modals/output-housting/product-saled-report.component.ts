import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { ProductSaledService } from 'src/app/modules/sales/product-sales/infraestructure/out/product-sales.service';
import { GetProductSalesForOutputHoustingDomainPort } from '../../../../application/ports/out/other-domain/get-product-sales-for-output-housting-domain.port';
import { ICompleteProductSaledPaymentPort } from '../../../../application/ports/out/other-domain/complete-product-saled-payment';
import { CompletePaymentService } from './../output-housting/complete-payment.service';
import { IPaymentProductSaledToCompletePID } from './interfaces-pid/payment-product-saled-to-complete';
import { ISavePaymentsPID } from './interfaces-pid/save-payments';

@Component({
    selector: 'app-product-saled-report',
    templateUrl: './product-saled-report.component.html',
    styleUrls: ['./product-saled-report.component.scss'],
})
export class ProductSaledReportComponent implements OnChanges, OnInit, DoCheck {
    @Input('houstingId') houstingId!: number;
    private getProductSalesForOutputHoustingDomainPort: GetProductSalesForOutputHoustingDomainPort;
    private completeProductSaledPaymentPort: ICompleteProductSaledPaymentPort;
    private paymentProductSaledToComplete: IPaymentProductSaledToCompletePID;
    private savePayment: ISavePaymentsPID;

    columnsProductsSaled: string[] = ['NameProduct', 'Price', 'Amount', 'State', 'TotalPrice'];
    productsSaled!: IProductsSaled[];

    constructor(completePaymentService: CompletePaymentService, productSaledService: ProductSaledService) {
        this.getProductSalesForOutputHoustingDomainPort = productSaledService;
        this.completeProductSaledPaymentPort = productSaledService;
        this.paymentProductSaledToComplete = completePaymentService;
        this.savePayment = completePaymentService;
    }
    ngOnChanges() {
        this.loadProductsSaled();
    }
    ngDoCheck() {
        this.sendPaymentToComplete();
    }
    ngOnInit() {
        this.completeProductSaledPayment();
    }
    loadProductsSaled() {
        this.getProductSalesForOutputHoustingDomainPort
            .getProductSaled(this.houstingId)
            .subscribe((response: IProductsSaled[]) => {
                console.log(response);
                this.productsSaled = response;
            });
    }
    sendPaymentToComplete() {
        if (this.productsSaled != undefined)
            this.paymentProductSaledToComplete.sendPaymentProductSaledToComplet(this.productsSaled);
    }
    completeProductSaledPayment() {
        this.savePayment.savePayment$.subscribe((save: boolean) => {
            if (save) {
                this.productsSaled.forEach((productSaled: IProductsSaled) => {
                    if (!productSaled.payed) {
                        this.completeProductSaledPaymentPort
                            .completeProductSaledPayment(this.houstingId, productSaled.id)
                            .subscribe((response) => {
                                //console.log(response);
                            });
                    }
                });
            }
        });
    }
}

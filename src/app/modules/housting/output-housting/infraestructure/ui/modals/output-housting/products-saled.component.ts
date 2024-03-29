import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
import { IProductsSaled } from 'src/app/modules/sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { ProductSaledService } from 'src/app/modules/sales/product-sales/infraestructure/out/product-sales.service';
import { GetProductSalesForOutputHoustingDomainPort } from '../../../../application/ports/out/other-domain/get-product-sales-for-output-housting-domain.port';
import { ICompleteProductSaledPaymentPort } from '../../../../application/ports/out/other-domain/complete-product-saled-payment';
import { CompletePaymentService } from './complete-payment.service';
import { IPaymentProductSaledToCompletePID } from './interfaces-pid/payment-product-saled-to-complete';
import { ISavePaymentsPID } from './interfaces-pid/save-payments';
import { IFinishProductsPaymentPID } from './interfaces-pid/finish-products-payment';

@Component({
    selector: 'app-products-saled',
    templateUrl: './products-saled.component.html',
    styleUrls: ['./products-saled.component.scss'],
})
export class ProductsSaledComponent implements OnChanges, OnInit, DoCheck {
    @Input('houstingId') houstingId!: number;
    private getProductSalesForOutputHoustingDomainPort: GetProductSalesForOutputHoustingDomainPort;
    private completeProductSaledPaymentPort: ICompleteProductSaledPaymentPort;
    private paymentProductSaledToComplete: IPaymentProductSaledToCompletePID;
    private finishProductsPayment: IFinishProductsPaymentPID;

    columnsProductsSaled: string[] = ['NameProduct', 'Price', 'Amount', 'State', 'TotalPrice'];
    productsSaled!: IProductsSaled[];

    constructor(completePaymentService: CompletePaymentService, productSaledService: ProductSaledService) {
        this.getProductSalesForOutputHoustingDomainPort = productSaledService;
        this.completeProductSaledPaymentPort = productSaledService;
        this.paymentProductSaledToComplete = completePaymentService;
        this.finishProductsPayment = completePaymentService;
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
                // console.log(response);
                this.productsSaled = response;
            });
    }
    sendPaymentToComplete() {
        if (this.productsSaled != undefined)
            this.paymentProductSaledToComplete.sendPaymentProductSaledToComplet(this.productsSaled);
    }
    completeProductSaledPayment() {
        this.finishProductsPayment.finishProductsPayment$.subscribe((save: boolean) => {
            console.log('---------------this.productsSaled[0]', this.productsSaled[0]);
            if (save && this.productsSaled[0] && !this.productsSaled[0].payed) {
                const productsSaledIds = this.productsSaled.map((productSaled) => productSaled.id);

                this.completeProductSaledPaymentPort
                    .completeProductSaledPayment(this.houstingId, productsSaledIds)
                    .subscribe((response) => {
                        // console.log('-----------------complemente payment products saled', response);
                    });
            }
        });
    }
}

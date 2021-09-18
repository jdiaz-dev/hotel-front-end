import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IHoustingReport } from './../../interfaces/houstig-report.interface';
import { CompletePaymentService } from './complete-payment.service';
import { OutputHoustingService } from './../../out/output-housting.service';
import { IProductsSaled } from './../../../../../sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-total-housting-report',
    templateUrl: './total-housting-report.component.html',
    styleUrls: ['./total-housting-report.component.scss'],
})
export class TotalHoustingReportComponent implements OnChanges, OnInit, OnDestroy {
    @Input('houstingId') houstingId!: number;
    columnsHoustingReport: string[] = ['TotalPrice', 'MoneyPaid', 'LateApplied', 'CompletePayment'];
    houstingReport!: IHoustingReport;
    subcriptionHousting!: Subscription;
    subscritpionProductsSaled!: Subscription;
    paymentToComplete!: number;
    houstingPayment!: number;
    productsSaledPayment!: number;

    constructor(
        private completePaymentService: CompletePaymentService,
        private outputHoustingService: OutputHoustingService,
    ) {}

    ngOnInit(): void {
        this.obtainPaymentHoustingToComplete();
        this.obtainPaymentProductSaledToComplete();
    }
    ngOnChanges(): void {
        //this.loadOutputHousting();
    }
    ngOnDestroy(): void {
        this.subcriptionHousting.unsubscribe();
        this.subscritpionProductsSaled.unsubscribe();
    }
    /* loadOutputHousting() {
        this.outputHoustingService.getHoustingReport(this.houstingId).subscribe((response: IHoustingReport) => {
            //console.log(response);
            this.houstingReport = response;
        });
    } */
    private obtainPaymentHoustingToComplete() {
        this.subcriptionHousting = this.completePaymentService.paymentHoustingToComplete$.subscribe(
            (houstingPayment: number) => {
                // console.log(houstingPayment);
                this.houstingPayment = houstingPayment;
                this.calculatePaymentToComplete();
            },
        );
    }
    private obtainPaymentProductSaledToComplete() {
        this.subscritpionProductsSaled = this.completePaymentService.paymentProductSalesToCompleteSource$.subscribe(
            (products: IProductsSaled[]) => {
                // console.log(products);
                this.calculatePaymentProductsSaled(products);
                this.calculatePaymentToComplete();
            },
        );
    }

    private calculatePaymentProductsSaled(products: IProductsSaled[]) {
        this.productsSaledPayment = products.reduce((total, product: IProductsSaled) => {
            let _total = total;
            if (!product.payed) _total + product.totalPrice;

            return _total;
        }, 0);
    }
    private calculatePaymentToComplete() {
        this.paymentToComplete = this.houstingPayment + this.productsSaledPayment;
    }
}

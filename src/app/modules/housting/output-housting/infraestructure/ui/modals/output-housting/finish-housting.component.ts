import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IHoustingReport } from '../../../interfaces/houstig-report.interface';
import { CompletePaymentService } from './../output-housting/complete-payment.service';
import { OutputHoustingService } from '../../../out/output-housting.service';
import { IProductsSaled } from '../../../../../../sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { Subscription } from 'rxjs';
import { IPaymentHoustingToCompletePID } from './interfaces-pid/payment-housting-to-complete';
import { IPaymentProductSaledToCompletePID } from './interfaces-pid/payment-product-saled-to-complete';
import { ISavePaymentsPID } from './interfaces-pid/save-payments';

@Component({
    selector: 'app-finish-housting',
    templateUrl: './finish-housting.component.html',
    styleUrls: ['./finish-housting.component.scss'],
})
export class FinishHoustingComponent implements OnChanges, OnInit, OnDestroy {
    @Input('houstingId') houstingId!: number;
    private paymentHoustingToComplete: IPaymentHoustingToCompletePID;
    private paymentProductSaledToComplete: IPaymentProductSaledToCompletePID;
    private savePayments: ISavePaymentsPID;

    columnsHoustingReport: string[] = ['TotalPrice', 'MoneyPaid', 'LateApplied', 'CompletePayment'];
    houstingReport!: IHoustingReport;
    subcriptionHousting!: Subscription;
    subscritpionProductsSaled!: Subscription;
    paymentToComplete!: number;
    houstingPayment!: number;
    productsSaledPayment!: number;

    constructor(completePaymentService: CompletePaymentService, private outputHoustingService: OutputHoustingService) {
        this.paymentHoustingToComplete = completePaymentService;
        this.paymentProductSaledToComplete = completePaymentService;
        this.savePayments = completePaymentService;
    }

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
    private obtainPaymentHoustingToComplete() {
        this.subcriptionHousting = this.paymentHoustingToComplete.paymentHoustingToComplete$.subscribe(
            (houstingPayment: number) => {
                // console.log(houstingPayment);
                this.houstingPayment = houstingPayment;
                this.calculatePaymentToComplete();
            },
        );
    }
    private obtainPaymentProductSaledToComplete() {
        this.subscritpionProductsSaled = this.paymentProductSaledToComplete.paymentProductSalesToComplete$.subscribe(
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
            if (!product.payed) _total += product.totalPrice;

            return _total;
        }, 0);
    }
    private calculatePaymentToComplete() {
        this.paymentToComplete = this.houstingPayment + this.productsSaledPayment;
    }
    finishHousting() {
        this.savePayments.savePayment(true);
    }
}

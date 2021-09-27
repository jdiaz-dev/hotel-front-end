import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IHoustingReport } from '../../../interfaces/houstig-report.interface';
import { CompletePaymentService } from './complete-payment.service';
import { OutputHoustingService } from '../../../out/output-housting.service';
import { IProductsSaled } from '../../../../../../sales/product-sales/infraestructure/interfaces/products-saled.interface';
import { Subscription } from 'rxjs';
import { IPaymentHoustingToCompletePID } from './interfaces-pid/payment-housting-to-complete';
import { IPaymentProductSaledToCompletePID } from './interfaces-pid/payment-product-saled-to-complete';
import { ISavePaymentsPID } from './interfaces-pid/save-payments';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { ConfirmRemoveComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ReloadRoomsService } from 'src/app/modules/housting/reception/infraestructure/ui/services/reload-rooms.service';
import { OutputHoustingContainerComponent } from './output-housting-container.component';

@Component({
    selector: 'app-button-finish-housting',
    templateUrl: './button-finish-housting.component.html',
    styleUrls: ['./button-finish-housting.component.scss'],
})
export class ButtonFinishHoustingComponent implements OnChanges, OnInit, OnDestroy {
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

    constructor(
        completePaymentService: CompletePaymentService,
        private outputHoustingService: OutputHoustingService,
        private reloadRoomsService: ReloadRoomsService,
        public dialogRef: MatDialogRef<OutputHoustingContainerComponent>,
        private dialog: MatDialog,
    ) {
        this.paymentHoustingToComplete = completePaymentService;
        this.paymentProductSaledToComplete = completePaymentService;
        this.savePayments = completePaymentService;
    }

    ngOnInit(): void {
        this.obtainPaymentHoustingToComplete();
        this.obtainPaymentProductSaledToComplete();
        this.reloadRoomsService.reloadRooms(false);
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
        const toCompleteDialog: CustomMessage = {
            title: 'Finalizar hospedamiento',
            toCompleteDescription: 'finalizar este hospedamiento',
        };
        let dialogRef = this.dialog.open(ConfirmRemoveComponent, { data: toCompleteDialog, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.reloadRoomsService.reloadRooms(true);
                this.dialogRef.close();
            }
        });
    }
}

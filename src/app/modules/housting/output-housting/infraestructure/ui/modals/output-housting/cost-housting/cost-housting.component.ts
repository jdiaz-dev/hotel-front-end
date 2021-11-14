import { Component, Input, OnChanges, OnInit, DoCheck } from '@angular/core';
import { IHoustingResponse } from 'src/app/modules/housting/input-housting/infraestructure/interfaces/housting-response.interface';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { ICompleteHoustingPaymentPort } from 'src/app/modules/housting/output-housting/application/ports/out/other-domain/complete-housting-payment';
import { CompletePaymentService } from '../complete-payment.service';
import { IPaymentHoustingToCompletePID } from '../interfaces-pid/payment-housting-to-complete';
import { ISavePaymentsPID } from './../interfaces-pid/save-payments';
import { IFinishProductsPaymentPID } from './../interfaces-pid/finish-products-payment';

@Component({
    selector: 'app-cost-housting',
    templateUrl: './cost-housting.component.html',
    styleUrls: ['./cost-housting.component.scss'],
})
export class CostHoustingComponent implements OnChanges, OnInit, DoCheck {
    @Input('roomId') roomId!: number;
    @Input('housting') housting!: IHoustingResponse;

    private completeHoustingPaymentPort: ICompleteHoustingPaymentPort;
    private paymentHoustingToComplete: IPaymentHoustingToCompletePID;
    private savePayment: ISavePaymentsPID;
    private finishProductsPayment: IFinishProductsPaymentPID;
    private houstingPrice!: number;
    private moneyPaidHousting!: number;
    paymentToComplete: number = 0;
    lateApplied: number = 0;

    columnsHousting: string[] = ['TotalPrice', 'MoneyPaid', 'LateApplied', 'CompletePayment'];

    constructor(completePaymentService: CompletePaymentService, houstingService: HoustingService) {
        this.completeHoustingPaymentPort = houstingService;
        this.paymentHoustingToComplete = completePaymentService;
        this.savePayment = completePaymentService;
        this.finishProductsPayment = completePaymentService;
    }
    ngOnChanges() {
        if (this.housting) {
            this.houstingPrice = this.housting.price;
            this.moneyPaidHousting = this.housting.moneyPaid;
            this.paymentToComplete = this.houstingPrice - this.moneyPaidHousting;
        }
    }
    ngOnInit(): void {
        this.completeHoustingPayment();
    }
    ngDoCheck(): void {
        this.sendPaymentToComplete();
    }
    obtainLateApplied(lateAppliedEvent: number | any) {
        this.paymentToComplete = this.houstingPrice - this.moneyPaidHousting + parseInt(lateAppliedEvent);
        this.sendPaymentToComplete();
    }
    sendPaymentToComplete() {
        this.paymentHoustingToComplete.sendPaymentHoustingToComplete(this.paymentToComplete);
    }
    completeHoustingPayment() {
        this.savePayment.saveHoustingPayment$.subscribe(async (save: boolean) => {
            //complete and finish housting
            if (save) {
                const paymentCompleted = await this.completeHoustingPaymentPort
                    .updateMoneyPaid(this.housting.id, this.housting.client.id, this.roomId, this.paymentToComplete)
                    .toPromise();
                // console.log('--------------------paymentCompleted', paymentCompleted);

                if (paymentCompleted) {
                    this.finishProductsPayment.finishProductsPayment(true);

                    this.completeHoustingPaymentPort
                        .finishHousting(this.housting.id, this.housting.client.id, this.roomId)
                        .subscribe((response) => {
                            // console.log('--------------------finishHousting', response);
                        });
                }
            }
        });
    }
}

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { DateService } from 'src/app/shared/services/date.service';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { CashService } from '../../../out/cash.service';
import { CashModel } from '../../models/cash.model';
import { MatDialog } from '@angular/material/dialog';
import { CONFIG } from '../../../../../../../config/config';
import { ImpossibleCreateCashComponent } from '../../modals/impossible-create-cash.component';
import { CashData } from '../../../interfaces/cash-data';
import { ICloseCashRequest } from 'src/app/modules/cash/application/ports/in/close-cash.request';
import { ICashClosed } from '../../../interfaces/cash-close';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';

@Component({
    selector: 'app-form-cash',
    templateUrl: './form-cash.component.html',
    styleUrls: ['./form-cash.component.scss'],
})
export class FormCashComponent implements OnInit, OnDestroy {
    private closeCashRequest: ICloseCashRequest;
    cashData!: FormGroup;
    cash: CashModel = new CashModel(null, this.dateService.getCurrentDate(), this.dateService.getCurrentTime());
    cashSubs!: Subscription;
    @Input('cashMode') formCashMode!: string;
    @Input('closingMoney') closingMoney!: number;
    @Input('cashId') cashId!: number;
    @Output() confirmCashClosed = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder,
        private readonly cashService: CashService,
        private readonly dateService: DateService,
        private readonly stateCashService: StateCashService,
        private dialog: MatDialog,
    ) {
        this.closeCashRequest = cashService;
    }
    ngOnChanges() {}
    ngOnInit(): void {
        this.cashData = this.formBuilder.group({
            openingMoney: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(REG_EXP.numeric)]],
            date: ['', [Validators.required, Validators.maxLength(30)]],
            time: ['', [Validators.required, Validators.maxLength(30)]],
        });
    }
    ngOnDestroy() {
        if (this.cashSubs) this.cashSubs.unsubscribe();
    }
    saveCash() {
        if (this.verifyIfThereIsAcashOpened() && this.formCashMode === 'abrir-caja') {
            const toCompleteDialog: ICustomMessage = {
                title: 'Abrir caja',
                toCompleteDescription: 'abrir esta caja',
            };
            let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '40%' });
            dialogRef.afterClosed().subscribe((result: boolean) => {
                if (result) {
                    this.cashSubs = this.cashService.createCash(this.cashData.value).subscribe((response: CashData) => {
                        this.stateCashService.saveCashInLocalStorage(response);
                        this.ngOnInit();
                    });
                }
            });
        }
    }
    private verifyIfThereIsAcashOpened() {
        const cashOpened = this.stateCashService.getCashId();
        let createCash = true;

        if (cashOpened) {
            createCash = false;
            this.openDialogImpossibleCreateCash();
        }
        return createCash;
    }
    private openDialogImpossibleCreateCash() {
        console.log('activated');
        const message = CONFIG.MESSAGES.IMPOSSIBLE_OPEN_CASH;
        let dialogRef = this.dialog.open(ImpossibleCreateCashComponent, { data: message, width: '25%' });
        /* dialogRef.afterClosed().subscribe(result => {
            if (result) this.reloadHotelLevelCollectionComponent++
            }) */
    }
    closeCash() {
        const toCompleteDialog: ICustomMessage = {
            title: 'Cerrar caja',
            toCompleteDescription: 'cerrar esta caja',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '25%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.closeCashRequest
                    .closeTheCash(this.stateCashService.getCashId())
                    .subscribe((response: ICashClosed) => {
                        // console.log(response);
                        this.stateCashService.removeCashFromLocalStorage();
                        this.confirmCashClosed.emit(true);
                    });
            }
        });
    }
    get cashControl() {
        return this.cashData.controls;
    }
}

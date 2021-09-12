import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { HoustingModel } from '../models/housting.model';
import { HoustingService } from '../../out/housting.service';

import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import { FormsValidForHoustingService } from '../services/communication/forms-valid-for-housting.service';
import { DateService } from 'src/app/shared/services/date.service';
import { VerifyClientSavedService } from '../services/communication/verify-client-saved.service';
import { MatDialog } from '@angular/material/dialog';
import { OkComponent } from 'src/app/shared/modals/ok.component';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';
dayjs.extend(utc);
dayjs.extend(localizedFormat);

@Component({
  selector: 'app-form-input-housting',
  templateUrl: './form-input-housting.component.html',
  styleUrls: ['./form-input-housting.component.scss'],
})
export class FormInputHoustingComponent implements OnInit, OnDestroy {
  @Input('roomId') roomId!: number;
  houstingData!: FormGroup;
  housting: HoustingModel = new HoustingModel(
    null,
    0,
    this.dateService.getCurrentDate(),
    this.dateService.getCurrentTime(),
  );
  allowSaveData!: boolean;
  clientSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private houstingService: HoustingService,
    private readonly formsValidForHoustingService: FormsValidForHoustingService,
    private readonly dateService: DateService,
    private readonly verifyClientSavedService: VerifyClientSavedService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.allowSaveData = false;
    this.houstingData = this.formBuilder.group({
      price: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      moneyPaid: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      entryDate: ['', [Validators.required, Validators.maxLength(30)]],
      entryTime: ['', [Validators.required, Validators.maxLength(30)]],
    });
    this.checkIfFormHoustingIsValid();
  }
  ngOnDestroy() {
    if (this.clientSubscription) this.clientSubscription.unsubscribe();
  }

  /* ============================= black box ============================= */
  //subscribe is repeated multiple times angular
  async saveHousting() {
    console.log('executed save housting');
    this.clientSubscription = this.verifyClientSavedService.userSaved$.subscribe((userId: number) => {
      if (userId) {
        console.log(userId);
        this.houstingService.createHousting(this.houstingData.value, this.roomId, userId).subscribe((response) => {
          console.log(response);
          this.openDialog();
        });
      }
    });
  }
  openDialog() {
    const config: IOkComponentConfig = {
      message: 'Un alojamiento ha sido añadido con éxito',
      useMethodsOkComponent: true,
    };
    let dialogRef = this.dialog.open(OkComponent, { data: config, width: '25%' });
  }
  checkIfFormHoustingIsValid() {
    this.houstingData.statusChanges.subscribe((statusForm) => {
      if (statusForm == 'VALID') {
        this.formsValidForHoustingService.confirmFormHoustingValid(true);
      }
    });
  }
  get houstingControl() {
    return this.houstingData.controls;
  }
}

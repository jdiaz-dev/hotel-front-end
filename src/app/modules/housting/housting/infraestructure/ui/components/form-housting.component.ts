import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { HoustingModel } from '../models/housting.model';
import { HoustingService } from '../../out/housting.service';

import * as dayjs from "dayjs";
import * as utc from 'dayjs/plugin/utc'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
import { FormsValidForHoustingService } from '../services/communication/forms-valid-for-housting.service';
import { DateService } from 'src/app/shared/services/date.service';
import { VerifyClientSavedService } from '../services/communication/verify-client-saved.service';
import { MatDialog } from '@angular/material/dialog';
import { OkComponent } from 'src/app/shared/modals/ok.component';
dayjs.extend(utc)
dayjs.extend(localizedFormat)

@Component({
  selector: 'app-form-housting',
  templateUrl: './form-housting.component.html',
  styleUrls: ['./form-housting.component.scss']
})
export class FormHoustingComponent implements OnInit, DoCheck {
  @Input('roomId') roomId!: number
  houstingData!: FormGroup
  housting: HoustingModel = new HoustingModel(null, 0, this.dateService.getCurrentDate(), this.dateService.getCurrentTime())
  allowSaveData!: boolean

  constructor(
    private formBuilder: FormBuilder,
    private houstingService: HoustingService,
    private readonly formsValidForHoustingService: FormsValidForHoustingService,
    private readonly dateService: DateService,
    private readonly verifyClientSavedService: VerifyClientSavedService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.allowSaveData = false
    this.houstingData = this.formBuilder.group({
      price: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      moneyPaid: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      entryDate: ['', [Validators.required, Validators.maxLength(30)]],
      entryTime: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }
  ngDoCheck() {
    this.noticeFormHoustingValid()
  }
  async saveHousting() {
    console.log('executed save housting')
    this.verifyClientSavedService.userSaved$.subscribe((userId: number) => {
      //console.log(userId)
      if (userId) {
        console.log(userId)
        this.houstingService.createHousting(this.houstingData.value, this.roomId, userId).subscribe(response => {
          console.log(response)
          this.openDialog()
        })
      }
    })
  }
  openDialog() {
    const message = 'Un alojamiento ha sido añadido con éxito'
    let dialogRef = this.dialog.open(OkComponent, { data: message, width: '25%' })
    /* dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result)
      if (result) this.ngOnInit()
    }) */
  }
  noticeFormHoustingValid() {
    if (!this.houstingData.invalid) {
      this.formsValidForHoustingService.confirmFormHoustingValid(true)
      console.log('entered')
      this.ngOnInit()
    }
  }
  get houstingControl() {
    return this.houstingData.controls
  }
}

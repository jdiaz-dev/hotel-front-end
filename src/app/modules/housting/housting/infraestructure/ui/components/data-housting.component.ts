import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { HoustingModel } from '../models/housting.model';
import { HoustingService } from '../../out/housting.service';

import * as dayjs from "dayjs";
import * as utc from 'dayjs/plugin/utc'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
import { FormsValidForHoustingService } from '../services/communication/forms-valid-for-housting.service';
import { DateService } from 'src/app/shared/services/date.service';
dayjs.extend(utc)
dayjs.extend(localizedFormat)

@Component({
  selector: 'app-data-housting',
  templateUrl: './data-housting.component.html',
  styleUrls: ['./data-housting.component.scss']
})
export class DataHoustingComponent implements OnInit, DoCheck {
  houstingData!: FormGroup
  housting: HoustingModel = new HoustingModel(null, 0, this.dateService.getCurrentDate())
  allowSaveData!: boolean

  constructor(
    private formBuilder: FormBuilder,
    private houstingService: HoustingService,
    private readonly formsValidForHoustingService: FormsValidForHoustingService,
    private readonly dateService: DateService
  ) { }

  ngOnInit(): void {
    this.allowSaveData = false
    this.houstingData = this.formBuilder.group({
      price: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      moneyPaid: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      date: ['', [Validators.required, Validators.maxLength(30)]]
    })
    //console.log(this.houstingData.invalid)
  }
  ngDoCheck() {
    this.noticeFormHoustingValid()
  }
  saveHousting() {
    this.houstingService.createHousting(this.houstingData.value).subscribe(response => {
      console.log(response)
    })
  }
  noticeFormHoustingValid() {
    if (!this.houstingData.invalid) this.formsValidForHoustingService.confirmFormHoustingValid(true)
    console.log(this.houstingData.invalid)
  }
  get houstingControl() {
    return this.houstingData.controls
  }
}

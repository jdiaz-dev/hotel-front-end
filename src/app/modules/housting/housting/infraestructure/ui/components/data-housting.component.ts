import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { HoustingModel } from '../models/housting.model';
import * as dayjs from "dayjs";
import * as utc from 'dayjs/plugin/utc'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(utc)
dayjs.extend(localizedFormat)

@Component({
  selector: 'app-data-housting',
  templateUrl: './data-housting.component.html',
  styleUrls: ['./data-housting.component.scss']
})
export class DataHoustingComponent implements OnInit {
  houstingData!: FormGroup
  housting: HoustingModel = new HoustingModel(null, 0, dayjs().utc(true).format('DD/MM/YYYY          LT'))

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.housting)
    this.houstingData = this.formBuilder.group({
      price: ['', [Validators.maxLength(4), Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      moneyPaid: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      date: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }
  get houstingControl() {
    return this.houstingData.controls
  }
}

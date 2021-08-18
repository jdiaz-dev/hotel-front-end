import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { DateService } from 'src/app/shared/services/date.service';
import { CashService } from '../../out/cash.service';
import { CashModel } from '../models/cash.model';


@Component({
  selector: 'app-create-cash',
  templateUrl: './create-cash.component.html',
  styleUrls: ['./create-cash.component.scss']
})
export class CreateCashComponent implements OnInit {
  cashData!: FormGroup
  cash: CashModel = new CashModel(this.dateService.getCurrentDate(), null)
  constructor(
    private formBuilder: FormBuilder,
    private readonly cashService: CashService,
    private readonly dateService: DateService,
  ) { }

  ngOnInit(): void {
    this.cashData = this.formBuilder.group({
      openingMoney: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(REG_EXP.numeric)]],
      date: ['', [Validators.required, Validators.maxLength(30)]],
    })
  }
  saveCash(form: any) {
    this.cashService.createCash(this.cashData.value).subscribe(response => {
      //console.log(response)
    })
  }
  get cashControl() {
    return this.cashData.controls
  }
}

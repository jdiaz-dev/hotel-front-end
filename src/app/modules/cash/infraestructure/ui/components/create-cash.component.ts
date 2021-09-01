import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { DateService } from 'src/app/shared/services/date.service';
import { CashService } from '../../out/cash.service';
import { CashModel } from '../models/cash.model';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { MatDialog } from '@angular/material/dialog';
import { ImpossibleCreateCashComponent } from '../modals/impossible-create-cash.component';
import { CONFIG } from 'src/config/config';

@Component({
  selector: 'app-create-cash',
  templateUrl: './create-cash.component.html',
  styleUrls: ['./create-cash.component.scss']
})
export class CreateCashComponent implements OnInit {
  cashData!: FormGroup
  cash: CashModel = new CashModel(null, this.dateService.getCurrentDate(), this.dateService.getCurrentTime())
  constructor(
    private formBuilder: FormBuilder,
    private readonly cashService: CashService,
    private readonly dateService: DateService,
    private readonly stateCashService: StateCashService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.verifyIfThereIsAcashOpened()
    this.cashData = this.formBuilder.group({
      openingMoney: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(REG_EXP.numeric)]],
      date: ['', [Validators.required, Validators.maxLength(30)]],
      time: ['', [Validators.required, Validators.maxLength(30)]],
    })
  }
  saveCash(form: any) {
    if (this.verifyIfThereIsAcashOpened()) {
      this.cashService.createCash(this.cashData.value).subscribe(response => {
        console.log(response)
      })
    }
  }
  verifyIfThereIsAcashOpened() {
    const cashOpened = this.stateCashService.getCashId()
    let createCash = true

    if (cashOpened !== NaN) {
      createCash = false
      this.openDialogImpossibleCreateCash()
    }
    return createCash
  }
  openDialogImpossibleCreateCash() {
    const message = CONFIG.MESSAGES.IMPOSSIBLE_OPEN_CASH
    let dialogRef = this.dialog.open(ImpossibleCreateCashComponent, { data: message, width: '25%' })
    /* dialogRef.afterClosed().subscribe(result => {
      if (result) this.reloadHotelLevelCollectionComponent++
    }) */
  }
  get cashControl() {
    return this.cashData.controls
  }

}
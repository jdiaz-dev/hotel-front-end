import { Injectable } from '@angular/core';
import { CashService } from 'src/app/modules/cash/infraestructure/out/cash.service';
import { CONFIG } from 'src/config/config';
import { GetCashNotClosedForSharedDomain } from '../application/ports/out/other-domains/get-cash-not-closed-for-shared-domain.port';
import { CashData } from './../../modules/cash/infraestructure/interfaces/cash-data';

@Injectable({
  providedIn: 'root'
})
export class StateCashService {
  private getCashNotClosedForSharedDomain: GetCashNotClosedForSharedDomain
  private dataCashLocalStorage: string = CONFIG.LOCAL_STORAGE.DATA_CASH;

  constructor(
    cashService: CashService,
  ) {
    this.getCashNotClosedForSharedDomain = cashService
  }
  async loadCash() {
    const cashData: CashData = await this.getCashNotClosedForSharedDomain.getCashNotClosed().toPromise()

    if (cashData !== null) {
      this.saveCashInLocalStorage(cashData)
    }
  }
  private saveCashInLocalStorage(cashData: CashData) {
    localStorage.setItem(this.dataCashLocalStorage, JSON.stringify(cashData));
  }
  getCashId() {

  }



}

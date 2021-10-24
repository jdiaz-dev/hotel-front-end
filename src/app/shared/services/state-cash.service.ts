import { Injectable } from '@angular/core';
import { CashService } from 'src/app/modules/cash/infraestructure/out/cash.service';
import { GetCashIdForHoustingDomain } from 'src/app/modules/housting/input-housting/application/ports/out/other-domain/get-cash-id-for-housting-domain';
import { CONFIG } from 'src/config/config';
import { GetCashNotClosedForSharedDomain } from '../application/ports/out/other-domains/get-cash-not-closed-for-shared-domain.port';
import { CashData } from './../../modules/cash/infraestructure/interfaces/cash-data';

@Injectable({
    providedIn: 'root',
})
export class StateCashService implements GetCashIdForHoustingDomain {
    private getCashNotClosedForSharedDomain: GetCashNotClosedForSharedDomain;
    private dataCashLocalStorage: string = CONFIG.LOCAL_STORAGE.DATA_CASH;

    constructor(cashService: CashService) {
        this.getCashNotClosedForSharedDomain = cashService;
    }
    async loadCashOpened() {
        const cashData: CashData = await this.getCashNotClosedForSharedDomain.getCashNotClosed().toPromise();

        if (cashData !== null) {
            this.saveCashInLocalStorage(cashData);
        }
    }
    getCashId() {
        const cash: CashData = this.getCash();
        if (cash) return cash.id;
        return NaN;
    }
    saveCashInLocalStorage(cashData: CashData) {
        localStorage.setItem(this.dataCashLocalStorage, JSON.stringify(cashData));
    }
    private getCash() {
        const cash: CashData = JSON.parse(localStorage.getItem(this.dataCashLocalStorage) || '{}');
        return cash;
    }
}

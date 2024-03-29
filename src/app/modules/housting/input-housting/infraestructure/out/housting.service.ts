import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { GetCashIdForHoustingDomain } from '../../application/ports/out/other-domain/get-cash-id-for-housting-domain';
import { HoustingModel } from '../ui/models/housting.model';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { GetHoustingForProductSalesDomainPort } from 'src/app/modules/sales/product-sales/application/ports/out/other-domains/get-housting-for-product-sales-domain.port';
import { GetHoustingForOutputHoustingDomainPort } from '../../../output-housting/application/ports/out/other-domain/get-housting-for-output-housting-domain.port';
import { IHoustingResponse } from '../interfaces/housting-response.interface';
import { ICompleteHoustingPaymentPort } from '../../../output-housting/application/ports/out/other-domain/complete-housting-payment';

@Injectable({
    providedIn: 'root',
})
export class HoustingService
    implements
        GetHoustingForProductSalesDomainPort,
        GetHoustingForOutputHoustingDomainPort,
        ICompleteHoustingPaymentPort
{
    private getCashIdForHoustingDomain: GetCashIdForHoustingDomain;
    private serverUrl = environment.serverUrl;
    private headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
    private hotelId!: number;
    private cashId!: number;

    constructor(
        private http: HttpClient,
        private stateUserService: StateUserService,
        stateCashService: StateCashService,
    ) {
        this.getCashIdForHoustingDomain = stateCashService;
    }
    createHousting(hotelLevel: HoustingModel, roomId: number, clientId: number) {
        this.loadRequiredParamsForPath();
        const body = JSON.stringify(hotelLevel);

        return this.http.post(
            `${this.serverUrl}/${SERVER.PREFIX}/housting/${this.hotelId}/${this.cashId}/${clientId}/${roomId}`,
            body,
            { headers: this.headers },
        );
    }

    getHousting(roomId: number) {
        this.loadRequiredParamsForPath();
        return this.http.get<IHoustingResponse>(
            `${this.serverUrl}/${SERVER.PREFIX}/housting/${this.hotelId}/${this.cashId}/${roomId}`,
            {
                headers: this.headers,
            },
        );
    }
    updateMoneyPaid(houstingId: number, clientId: number, roomId: number, moneyToAdd: number) {
        this.loadRequiredParamsForPath();
        const body = JSON.stringify({ moneyToAdd });

        return this.http.put(
            `${this.serverUrl}/${SERVER.PREFIX}/housting/${this.hotelId}/${this.cashId}/${houstingId}/${clientId}/${roomId}`,
            body,
            {
                headers: this.headers,
            },
        );
    }
    finishHousting(houstingId: number, clientId: number, roomId: number) {
        this.loadRequiredParamsForPath();

        return this.http.put(
            `${this.serverUrl}/${SERVER.PREFIX}/housting/finish/${this.hotelId}/${this.cashId}/${houstingId}/${clientId}/${roomId}`,
            '',
            {
                headers: this.headers,
            },
        );
    }

    private loadRequiredParamsForPath() {
        this.hotelId = this.stateUserService.getHotelId();
        this.cashId = this.getCashIdForHoustingDomain.getCashId();
    }
}

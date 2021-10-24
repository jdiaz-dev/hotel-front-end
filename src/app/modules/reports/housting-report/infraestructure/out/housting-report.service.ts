import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { environment } from '../../../../../../environments/environment';
import { GetCashIdForHoustingDomain } from '../../../../housting/input-housting/application/ports/out/other-domain/get-cash-id-for-housting-domain';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { IGetHoustingReportsForDailyReportPort } from '../../../daily-reports/application/ports/other-domains/get-housting-reports-for-daily-reports.port';
import { IEndHoustingReportResponse } from '../interfaces/housting-report';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

@Injectable({
    providedIn: 'root',
})
export class HoustingReportService implements IGetHoustingReportsForDailyReportPort {
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
    getHoustingReport(queries: IQueries) {
        this.loadRequiredParamsForPath();
        return this.http.get<IEndHoustingReportResponse>(
            `${this.serverUrl}/${SERVER.PREFIX}/housting-report/${this.hotelId}/${this.cashId}}?limit=${queries.limit}&offset=${queries.offset}`,
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

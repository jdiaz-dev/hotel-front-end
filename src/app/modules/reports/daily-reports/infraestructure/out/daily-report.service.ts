import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCashIdForHoustingDomain } from 'src/app/modules/housting/input-housting/application/ports/out/other-domain/get-cash-id-for-housting-domain';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { IGetDailyReportPort } from '../../application/ports/other-domains/get-daily-report.port';
import { environment } from './../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { IDailyReport } from '../interfaces/daily-report';

@Injectable({
    providedIn: 'root',
})
export class DailyReportService implements IGetDailyReportPort {
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
    getTheDailyReport(): Observable<IDailyReport> {
        this.loadRequiredParamsForPath();
        return this.http.get<IDailyReport>(
            `${this.serverUrl}/${SERVER.PREFIX}/daily-reports/${this.hotelId}/${this.cashId}}`,
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

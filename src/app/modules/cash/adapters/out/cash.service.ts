import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCashNotClosedForSharedDomain } from 'src/app/shared/application/ports/out/other-domains/get-cash-not-closed-for-shared-domain.port';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { ICloseCashRequest } from '../../application/ports/in/close-cash.request';
import { IGetCashWithDailyReportQuery } from '../../application/ports/in/get-cash-with-daily-report.query';
import { CashData } from '../interfaces/cash-data';
import { ICashWithDailyReportResponse } from '../interfaces/cash-with-daily-report-response';
import { CashModel } from '../ui/models/cash.model';
import { ICashClosed } from '../interfaces/cash-close';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

@Injectable({
    providedIn: 'root',
})
export class CashService implements GetCashNotClosedForSharedDomain, IGetCashWithDailyReportQuery, ICloseCashRequest {
    private serverUrl = environment.serverUrl;
    private headers!: HttpHeaders;
    private hotelId!: number;

    constructor(private http: HttpClient, private stateUserService: StateUserService) {}

    createCash(hotelLevel: CashModel) {
        this.loadRequiredProperties();
        const body = JSON.stringify(hotelLevel);
        return this.http.post<CashData>(`${this.serverUrl}/${SERVER.PREFIX}/cash/${this.hotelId}`, body, {
            headers: this.headers,
        });
    }
    getCashNotClosed() {
        this.loadRequiredProperties();
        return this.http.get<CashData>(
            `${this.serverUrl}/${SERVER.PREFIX}/cash/${this.stateUserService.getHotelId()}`,
            { headers: this.headers },
        );
    }
    getTheCashWithDailyReport(queries: IQueries): Observable<ICashWithDailyReportResponse> {
        this.loadRequiredProperties();
        return this.http.get<ICashWithDailyReportResponse>(
            `${this.serverUrl}/${SERVER.PREFIX}/cash/report/${this.stateUserService.getHotelId()}?limit=${
                queries.limit
            }&offset=${queries.offset}`,
            { headers: this.headers },
        );
    }
    closeTheCash(cashId: number): Observable<ICashClosed> {
        this.loadRequiredProperties();
        return this.http.patch<ICashClosed>(
            `${this.serverUrl}/${SERVER.PREFIX}/cash/${this.stateUserService.getHotelId()}/${cashId}`,
            '',
            {
                headers: this.headers,
            },
        );
    }
    private loadRequiredProperties() {
        this.headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
        this.hotelId = this.stateUserService.getHotelId();
    }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { GetCashIdForHoustingDomain } from '../../../input-housting/application/ports/out/other-domain/get-cash-id-for-housting-domain';

@Injectable({
  providedIn: 'root',
})
export class OutputHoustingService {
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
  getHoustingReport(houstingId: number) {
    this.loadRequiredParamsForPath();
    return this.http.get(
      `${this.serverUrl}/${SERVER.PREFIX}/housting-report/${this.hotelId}/${this.cashId}/${houstingId}`,
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { GetCashIdForHoustingDomain } from '../../application/ports/out/other-domain/get-cash-id-for-housting-domain';
import { HoustingModel } from '../ui/models/housting.model';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { GetHoustingForProductSalesDomain } from 'src/app/modules/sales/product-sales/application/ports/out/other-domains/get-housting-for-product-sales-domain.port';

@Injectable({
  providedIn: 'root'
})
export class HoustingService implements GetHoustingForProductSalesDomain {
  private getCashIdForHoustingDomain: GetCashIdForHoustingDomain
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId!: number
  private cashId!: number

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService,
    stateCashService: StateCashService
  ) {
    this.getCashIdForHoustingDomain = stateCashService
  }
  createHousting(hotelLevel: HoustingModel, roomId: number, clientId: number) {
    this.loadRequiredParamsForPath()
    const body = JSON.stringify(hotelLevel);

    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/housting/${this.hotelId}/${this.cashId}/${clientId}/${roomId}`, body, { headers: this.headers })
  }

  getHousting() {
    return this.http.get(`${this.serverUrl}/${SERVER.PREFIX}/housting/${this.hotelId}`, { headers: this.headers })
  }
  /* updateMoneyPaid(hotelLevel: LevelModel, levelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, body, { headers: this.headers })
  }
  updateFinish(levelId: number) {
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, { headers: this.headers })
  } */
  private loadRequiredParamsForPath() {
    this.hotelId = this.stateUserService.getHotelId()
    this.cashId = this.getCashIdForHoustingDomain.getCashId()
  }
}

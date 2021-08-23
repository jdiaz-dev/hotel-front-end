import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCashNotClosedForSharedDomain } from 'src/app/shared/application/ports/out/other-domains/get-cash-not-closed-for-shared-domain.port';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { CashData } from '../interfaces/cash-data';
import { CashModel } from '../ui/models/cash.model';

@Injectable({
  providedIn: 'root'
})
export class CashService implements GetCashNotClosedForSharedDomain {
  private serverUrl = environment.serverUrl
  private headers!: HttpHeaders
  private hotelId!: number

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  private loadRequiredProperties() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken())
    this.hotelId = this.stateUserService.getHotelId()

  }
  createCash(hotelLevel: CashModel) {
    this.loadRequiredProperties()
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/cash/${this.hotelId}`, body, { headers: this.headers })
  }
  getCashNotClosed() {
    this.loadRequiredProperties()
    return this.http.get<CashData>(`${this.serverUrl}/${SERVER.PREFIX}/cash/${this.stateUserService.getHotelId()}`, { headers: this.headers })
  }
}

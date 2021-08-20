import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { CashModel } from '../ui/models/cash.model';

@Injectable({
  providedIn: 'root'
})
export class CashService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId: number = this.stateUserService.getHotelId()

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  createCash(hotelLevel: CashModel) {
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/cash/${this.hotelId}`, body, { headers: this.headers })
  }
  getCashNotClosed() {
    return this.http.get(`${this.serverUrl}/${SERVER.PREFIX}/cash/${this.hotelId}`, { headers: this.headers })
  }
}

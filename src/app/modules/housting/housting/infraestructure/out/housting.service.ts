import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { HoustingModel } from '../ui/models/housting.model';

@Injectable({
  providedIn: 'root'
})
export class HoustingService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId: number = this.stateUserService.getHotelId()

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  createHousting(hotelLevel: HoustingModel) {
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/housting/${this.hotelId}/${'cashId'}/${'clientId'}/${'roomId'}`, body, { headers: this.headers })
  }
  /* getHousting() {
    return this.http.get<LevelData[]>(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}`, { headers: this.headers })
  }
  updateMoneyPaid(hotelLevel: LevelModel, levelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, body, { headers: this.headers })
  }
  updateFinish(levelId: number) {
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, { headers: this.headers })
  } */
}

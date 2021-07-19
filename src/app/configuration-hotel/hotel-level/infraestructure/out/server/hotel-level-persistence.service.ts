import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment';
import { HotelLevelModel } from '../../ui/models/hotel-level.mode';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { AccessKeys } from 'src/app/shared/consts/name-token';

@Injectable({
  providedIn: 'root'
})
export class HotelLevelPersistenceService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId: number = this.stateUserService.getHotelId()

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  createHotelLevel(hotelLevel: HotelLevelModel) {
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/jdev/levels/`, body, { headers: this.headers })
  }
  getHotelLevels() {
    return this.http.get(`${this.serverUrl}/jdev/levels/${this.hotelId}`, { headers: this.headers })
  }
  updateHotelLevel(hotelLevel: HotelLevelModel, hotelLevelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/jdev/levels/${hotelLevelId}`, body, { headers: this.headers })
  }
}

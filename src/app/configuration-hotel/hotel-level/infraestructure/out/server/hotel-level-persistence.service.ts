import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment';
import { LevelModel } from '../../ui/models/level.model';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { AccessKeys } from 'src/app/shared/consts/name-token';
import { LevelData } from '../../interfaces/level-data.interface';
import { SERVER } from 'src/app/shared/enums/server.enum';

@Injectable()
export class HotelLevelPersistenceService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId: number = this.stateUserService.getHotelId()

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  createHotelLevel(hotelLevel: LevelModel) {
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}`, body, { headers: this.headers })
  }
  getHotelLevels() {
    return this.http.get<LevelData[]>(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}`, { headers: this.headers })
  }
  updateHotelLevel(hotelLevel: LevelModel, levelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, body, { headers: this.headers })
  }
  removeLevel(levelId: number) {
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, { headers: this.headers })
  }
}

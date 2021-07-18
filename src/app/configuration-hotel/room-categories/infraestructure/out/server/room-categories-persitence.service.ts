import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment';
import { RoomCategoryModel } from '../../ui/models/room-category.model';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { nameToken } from 'src/app/shared/consts/name-token';


@Injectable({
  providedIn: 'root'
})
export class RoomCategoriesPersitenceService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(nameToken, this.stateUserService.getToken());

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  createRoomCategory(hotelLevel: RoomCategoryModel) {
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/social-dynamic/openers/`, body, { headers: this.headers })
  }
  getRoomCategories() {
    return this.http.post(`${this.serverUrl}/social-dynamic/openers/`, { headers: this.headers })
  }
  updateRoomCategory(hotelLevel: RoomCategoryModel, hotelLevelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/social-dynamic/openers/${hotelLevelId}`, body, { headers: this.headers })
  }
}

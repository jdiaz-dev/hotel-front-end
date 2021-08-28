import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment';

import { StateUserService } from 'src/app/shared/services/state-user.service';
import { AccessKeys } from 'src/app/shared/enums/name-token';

import { SERVER } from 'src/app/shared/enums/server.enum';
import { RoomCategoryModel } from '../ui/models/room-category.model';
import { CategoryData } from '../interfaces/category-data.interface';


@Injectable()
export class RoomCategoriesPersitenceService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId: number = this.stateUserService.getHotelId()

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  createRoomCategory(hotelLevel: RoomCategoryModel) {
    const body = JSON.stringify(hotelLevel);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/room-categories/${this.hotelId}`, body, { headers: this.headers })
  }
  getRoomCategories() {
    return this.http.get<CategoryData[]>(`${this.serverUrl}/${SERVER.PREFIX}/room-categories/${this.hotelId}`, { headers: this.headers })
  }
  updateRoomCategory(hotelLevel: RoomCategoryModel, hotelLevelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/room-categories/${this.hotelId}/${hotelLevelId}`, body, { headers: this.headers })
  }
  removeRoomCategory(hotelLevelId: number) {
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/room-categories/${this.hotelId}/${hotelLevelId}`, { headers: this.headers })
  }
}

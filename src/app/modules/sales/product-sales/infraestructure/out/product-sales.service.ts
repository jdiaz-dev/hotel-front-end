import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSalesService {
  private serverUrl = environment.serverUrl
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
  private hotelId: number = this.stateUserService.getHotelId()

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService,
  ) { }
  /* createRoom(room: RoomModel) {
    const body = JSON.stringify(room);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}`, body, { headers: this.headers })
  }
  getALLRooms() {
    return this.http.get<RoomData[]>(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}`, { headers: this.headers })
  }
  getRoomsByLevel(levelId: number, conditionId: number) {
    return this.http.get<RoomData[]>(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/${levelId}?conditionId=${conditionId}`, { headers: this.headers })
  }
  updateRoom(room: RoomModel, levelId: number, categoryId: number, roomId: number) {
    const body = JSON.stringify(room);

    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/${levelId}/${categoryId}/${roomId}`, body, { headers: this.headers })
  }
  removeRoom(levelId: number, roomId: number) {
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/${levelId}/${roomId}`, { headers: this.headers })
  } */
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { ProductAddedModel } from '../ui/models/product-added.model';
import { GetCashIdForHoustingDomain } from './../../../../housting/input-housting/application/ports/out/other-domain/get-cash-id-for-housting-domain';

@Injectable({
  providedIn: 'root',
})
export class ProductSalesService {
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
  createProductSale(productSaled: ProductAddedModel, houstingId: number) {
    this.loadRequiredParamsForPath();
    const body = JSON.stringify(productSaled);
    return this.http.post(
      `${this.serverUrl}/${SERVER.PREFIX}/product-sales/${this.hotelId}/${this.cashId}/${houstingId}/${productSaled.productId}`,
      body,
      {
        headers: this.headers,
      },
    );
  }
  /* getALLRooms() {
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
  private loadRequiredParamsForPath() {
    this.hotelId = this.stateUserService.getHotelId();
    this.cashId = this.getCashIdForHoustingDomain.getCashId();
  }
}

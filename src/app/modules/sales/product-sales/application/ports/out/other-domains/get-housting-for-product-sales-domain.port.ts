import { Observable } from 'rxjs';

export interface GetHoustingForProductSalesDomainPort {
  getHousting(roomId: number): Observable<any>
}
import { Observable } from 'rxjs';

export interface GetHoustingForProductSalesDomain {
  getHousting(roomId: number): Observable<any>
}
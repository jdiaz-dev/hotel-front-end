import { Observable } from 'rxjs';

export interface GetHoustingForProductSalesDomain {
  getHousting(hotelId: number): Observable<any>
}
import { Observable } from 'rxjs';

export interface GetHoustingForOutputHoustingDomainPort {
  getHousting(roomId: number): Observable<any>;
}

import { Observable } from 'rxjs';
export interface IUpdateRoomConditionFromReceptionDomain {
    updateTheRoomCondition(roomId: number): Observable<any>;
}

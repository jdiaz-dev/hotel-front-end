import { Observable } from 'rxjs';
import { IRoomConditionsReport } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room-conditions-report';

export interface IGetRoomConditionsReportForReceptionDomain {
    getRoomConditionReport(): Observable<IRoomConditionsReport>;
}

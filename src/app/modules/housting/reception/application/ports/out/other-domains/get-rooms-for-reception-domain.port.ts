import { Observable } from "rxjs";
import { RoomData } from "src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data";

export interface GetRoomsForReceptionDomainPort {
    getRoomsByLevel(levelId: number, conditionId: number): Observable<RoomData[]>
}
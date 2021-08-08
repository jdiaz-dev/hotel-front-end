import { Observable } from "rxjs";
import { RoomData } from "src/app/configuration-hotel/rooms/infraestructure/interfaces/room.data";

export interface GetRoomsForReceptionDomainPort {
    getRoomsByLevel(levelId: number): Observable<RoomData[]>
}
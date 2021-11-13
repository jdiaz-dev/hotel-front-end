import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { IRoomsDataResponse, RoomData } from '../interfaces/room.data';
import { RoomModel } from '../ui/models/room.model';
import { GetRoomsForReceptionDomainPort } from 'src/app/modules/housting/reception/application/ports/out/other-domains/get-rooms-for-reception-domain.port';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { CONFIG } from 'src/config/config';
import { IUpdateRoomConditionFromReceptionDomain } from 'src/app/modules/housting/reception/application/ports/in/other-domains/update-room-condition-from-reception';
import { IGetRoomConditionsReportForReceptionDomain } from 'src/app/modules/housting/reception/application/ports/in/other-domains/get-room-conditions-report-for-reception';
import { IRoomConditionsReport } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room-conditions-report';

@Injectable({
    providedIn: 'root',
})
export class RoomsPersistenceService
    implements
        GetRoomsForReceptionDomainPort,
        IUpdateRoomConditionFromReceptionDomain,
        IGetRoomConditionsReportForReceptionDomain
{
    private serverUrl = environment.serverUrl;
    private headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
    private hotelId: number = this.stateUserService.getHotelId();

    constructor(private http: HttpClient, private stateUserService: StateUserService) {}
    createRoom(room: RoomModel) {
        const body = JSON.stringify(room);
        return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}`, body, {
            headers: this.headers,
        });
    }
    getAllRooms(queries: IQueries) {
        return this.http.get<IRoomsDataResponse>(
            `${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}?limit=${queries.limit}&offset=${queries.offset}&searchText=${queries.searchText}`,
            {
                headers: this.headers,
            },
        );
    }
    getRoomsByLevel(levelId: number, conditionId: number) {
        return this.http.get<RoomData[]>(
            `${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/levels/${levelId}?conditionId=${conditionId}`,
            { headers: this.headers },
        );
    }
    getRoomConditionReport() {
        return this.http.get<IRoomConditionsReport>(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/report`, {
            headers: this.headers,
        });
    }
    updateRoom(room: RoomModel, levelId: number, categoryId: number, roomId: number) {
        const body = JSON.stringify(room);

        return this.http.put(
            `${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/${levelId}/${categoryId}/${roomId}`,
            body,
            { headers: this.headers },
        );
    }
    removeRoom(levelId: number, roomId: number) {
        return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/${levelId}/${roomId}`, {
            headers: this.headers,
        });
    }
    updateTheRoomCondition(roomId: number) {
        const roomCleanId: number = CONFIG.CONDITIONS.FREE.ID;
        console.log(this.headers);
        return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/rooms/${this.hotelId}/${roomId}/${roomCleanId}`, '', {
            headers: this.headers,
        });
    }
}

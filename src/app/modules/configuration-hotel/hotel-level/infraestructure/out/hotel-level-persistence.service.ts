import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LevelModel } from '../ui/models/level.model';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { ILevelsDataResponse } from '../interfaces/level-data.interface';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { GetLevelsForReceptionDomain } from 'src/app/modules/housting/reception/application/ports/out/other-domains/get-levels-for-reception-domain.port';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

@Injectable()
export class HotelLevelPersistenceService implements GetLevelsForReceptionDomain {
    private serverUrl = environment.serverUrl;
    private headers!: HttpHeaders;
    private hotelId!: number;

    constructor(private http: HttpClient, private stateUserService: StateUserService) {}
    createHotelLevel(hotelLevel: LevelModel) {
        this.loadRequiredProperties();
        const body = JSON.stringify(hotelLevel);
        return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}`, body, {
            headers: this.headers,
        });
    }
    getHotelLevels(queries: IQueries) {
        this.loadRequiredProperties();
        return this.http.get<ILevelsDataResponse>(
            `${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}?limit=${queries.limit}&offset=${queries.offset}`,
            {
                headers: this.headers,
            },
        );
    }
    updateHotelLevel(hotelLevel: LevelModel, levelId: number) {
        this.loadRequiredProperties();
        const body = JSON.stringify(hotelLevel);

        return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, body, {
            headers: this.headers,
        });
    }
    removeLevel(levelId: number) {
        this.loadRequiredProperties();
        return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, {
            headers: this.headers,
        });
    }
    private loadRequiredProperties() {
        this.headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
        this.hotelId = this.stateUserService.getHotelId();
    }
}

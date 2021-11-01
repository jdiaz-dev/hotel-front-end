import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { IGetClientsRequest } from '../../application/ports/in/get-clients.request';
import { IDataClientsResponse } from '../ui/interfaces/data-clients-response';
import { ClientModel } from '../ui/models/client.model';
import { IQueries } from './../../../../shared/interfaces/queries/queries.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientsService implements IGetClientsRequest {
    private serverUrl = environment.serverUrl;
    private headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken());
    private hotelId: number = this.stateUserService.getHotelId();

    constructor(private http: HttpClient, private stateUserService: StateUserService) {}
    createClient(client: ClientModel) {
        const body = JSON.stringify(client);
        console.log(body);
        return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/clients/${this.hotelId}`, body, {
            headers: this.headers,
        });
    }
    getClients(queries: IQueries) {
        return this.http.get<IDataClientsResponse>(
            `${this.serverUrl}/${SERVER.PREFIX}/clients/${this.hotelId}?limit=${queries.limit}&offset=${queries.offset}&searchText=${queries.searchText}`,
            { headers: this.headers },
        );
    }
    /* 
  updateMoneyPaid(hotelLevel: LevelModel, levelId: number) {
    const body = JSON.stringify(hotelLevel);

    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, body, { headers: this.headers })
  }
  updateFinish(levelId: number) {
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/levels/${this.hotelId}/${levelId}`, { headers: this.headers })
  } */
}

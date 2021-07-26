import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { StateUserService } from './../../shared/services/state-user.service';
import { Observable } from 'rxjs';
import { SERVER } from 'src/app/shared/enums/server.enum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.serverUrl
  private headers: HttpHeaders
  private nameUserLocalStorage: string = 'data_user';

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('nk-token', this.stateUserService.getToken());
  }
  login(user?: UserModel): Observable<any> {
    const params = JSON.stringify(user);
    return this.http.post(`${this.apiUrl}/${SERVER.PREFIX}/users/login`, params, { headers: this.headers })
  }
}




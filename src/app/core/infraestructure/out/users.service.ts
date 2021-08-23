import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { UserModel } from '../models/user.model';

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
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }
  login(user?: UserModel): Observable<any> {
    const params = JSON.stringify(user);
    return this.http.post(`${this.apiUrl}/${SERVER.PREFIX}/users/login`, params, { headers: this.headers })
  }
}




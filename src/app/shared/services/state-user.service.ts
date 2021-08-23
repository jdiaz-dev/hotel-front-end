import { Injectable } from '@angular/core';
import { CONFIG } from 'src/config/config';
import { DataUser } from '../interfaces/data-user.interface';

@Injectable({
  providedIn: 'root'
})
export class StateUserService {
  private nameUserLocalStorage: string = CONFIG.LOCAL_STORAGE.DATA_USER;

  constructor() { }
  getToken(): string {
    let user: DataUser = this.getDataUser()
    if (user) return user.token
    return ''
  }
  getHotelId(): number {
    const user: DataUser = this.getDataUser()
    if (user) return user.hotelId
    return NaN
  }
  private getDataUser() {
    const user: DataUser = JSON.parse(localStorage.getItem(this.nameUserLocalStorage) || '{}');
    return user
  }
  saveUserLocalStorage(dataUser: object) {
    localStorage.setItem(this.nameUserLocalStorage, JSON.stringify(dataUser));
  }

}

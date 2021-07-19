import { Injectable } from '@angular/core';
import { AccessData } from '../interfaces/access.data.interface';

@Injectable({
  providedIn: 'root'
})
export class StateUserService {
  private nameUserLocalStorage: string = 'data_user';

  constructor() { }
  getToken(): string {
    let user: AccessData = this.getDataUser()
    if (user) return user.token
    return ''
  }
  /* getIdUser(){
    const user: any = this.getDataUser()
    if (user) return user.user.uid
    return
  }
  getDataProfileUser(){
    const user: any = this.getDataUser()
    if (user) return user.user
    return
  } */
  getHotelId(): number {
    const user: AccessData = this.getDataUser()
    if (user) return user.hotelId
    return NaN
  }
  getDataUser() {
    const user: AccessData = JSON.parse(localStorage.getItem(this.nameUserLocalStorage) || '{}');
    return user
  }
  saveUserLocalStorage(dataUser: object) {
    localStorage.setItem(this.nameUserLocalStorage, JSON.stringify(dataUser));
  }

}

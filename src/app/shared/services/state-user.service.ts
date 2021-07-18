import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateUserService {
  private nameUserLocalStorage: string = 'data_user';

  constructor() { }
  getToken() {
    const user: any = this.getDataUser()
    if (user) return user.token
    return
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
  getDataUser() {
    const user: object = JSON.parse(localStorage.getItem(this.nameUserLocalStorage) || '{}');
    return user
  }
  saveUserLocalStorage(dataUser: object) {
    localStorage.setItem(this.nameUserLocalStorage, JSON.stringify(dataUser));
  }

}

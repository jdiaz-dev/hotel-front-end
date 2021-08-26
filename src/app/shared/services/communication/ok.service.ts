import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OkService {
  private activedOkButtonSource = new Subject<boolean>();
  activedOkButton$ = this.activedOkButtonSource.asObservable();

  constructor() { }
  confirmUserSaved() {
    this.activedOkButtonSource.next(true)
  }
}

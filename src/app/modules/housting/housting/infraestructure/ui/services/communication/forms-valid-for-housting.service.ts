import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsValidForHoustingService {

  private confirmFormClientValidSource = new Subject<boolean>();
  private confirmFormHoustingValidSource = new Subject<boolean>();
  formClientValid$ = this.confirmFormClientValidSource.asObservable();
  formHoustingValid$ = this.confirmFormHoustingValidSource.asObservable();

  constructor() { }

  confirmFormClientValid(ready: boolean) {
    this.confirmFormClientValidSource.next(ready);
  }
  confirmFormHoustingValid(ready: boolean) {
    this.confirmFormHoustingValidSource.next(ready);
  }

}

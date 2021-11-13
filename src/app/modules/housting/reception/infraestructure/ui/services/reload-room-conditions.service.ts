import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReloadRoomConditionsService {
    private realoadRoomsConditionsCommand = new Subject<boolean>();
    reloadRoomsConditiions$ = this.realoadRoomsConditionsCommand.asObservable();

    constructor() {}
    reloadRoomConditions(reload: boolean) {
        this.realoadRoomsConditionsCommand.next(reload);
    }
}

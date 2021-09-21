import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReloadRoomsService {
    private realoadRoomsCommand = new Subject<boolean>();
    reloadRooms$ = this.realoadRoomsCommand.asObservable();

    constructor() {}
    reloadRooms(reload: boolean) {
        this.realoadRoomsCommand.next(reload);
    }
}

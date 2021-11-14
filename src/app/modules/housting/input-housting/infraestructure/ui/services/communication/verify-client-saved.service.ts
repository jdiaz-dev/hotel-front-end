import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VerifyClientSavedService {
    private confirmUserSavedSource = new Subject<number>();
    userSaved$ = this.confirmUserSavedSource.asObservable();

    constructor() {}
    confirmUserSaved(userId: number) {
        this.confirmUserSavedSource.next(userId);
    }
}

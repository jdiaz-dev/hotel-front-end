import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LevelAndRoomCommunicationService {

  private renderOtherRoomsSource = new Subject<number>();
  renderOtherRooms$ = this.renderOtherRoomsSource.asObservable();

  constructor() { }
  renderOtherRooms(levelId: number) {
    this.renderOtherRoomsSource.next(levelId);
  }
}

import { Injectable } from '@angular/core';
import { RoomsPersistenceService } from '../../../out/server/rooms.service';
import { RoomModel } from '../../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateRoomService {

  /* constructor(private roomsPersistenceService: RoomsPersistenceService,) { }
  createRoom(data: RoomModel) {
    this.roomsPersistenceService.createRoom(data).subscribe((response: any) => {
      console.log(response)

    }, (error) => {
      console.log(error)
    })
  }
  updateRoom(data: RoomModel) {
    this.roomsPersistenceService.updateRoom(data, this.levelId, this.categoryId, this.roomId).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  } */
}

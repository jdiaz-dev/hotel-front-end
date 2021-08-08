import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { RoomData } from 'src/app/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { RoomsPersistenceService } from 'src/app/configuration-hotel/rooms/infraestructure/out/server/rooms.service';
import { GetRoomsForReceptionDomainPort } from '../../../application/ports/out/other-domains/get-rooms-for-reception-domain.port';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit, OnChanges {
  @Input('levelId') levelId!: number
  private getRoomsForReceptionDomainPort: GetRoomsForReceptionDomainPort
  roomList: RoomData[] = []

  constructor(private readonly roomsPersistenceService: RoomsPersistenceService) {
    this.getRoomsForReceptionDomainPort = roomsPersistenceService
  }
  ngOnChanges() {
    this.loadRoomsByLevel()
  }
  ngOnInit(): void {
    //this.loadRoomsByLevel()
  }
  loadRoomsByLevel() {
    this.getRoomsForReceptionDomainPort.getRoomsByLevel(this.levelId).subscribe((response: RoomData[]) => {
      console.log(response)
      this.roomList = response
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { RoomData } from 'src/app/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { RoomsPersistenceService } from 'src/app/configuration-hotel/rooms/infraestructure/out/server/rooms.service';
import { GetRoomsForReceptionDomainPort } from '../../../application/ports/out/other-domains/get-rooms-for-reception-domain.port';
import { LevelAndRoomCommunicationService } from '../../services/level-and-room-communication.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {
  private getRoomsForReceptionDomainPort: GetRoomsForReceptionDomainPort
  roomList: RoomData[] = []

  constructor(
    private readonly roomsPersistenceService: RoomsPersistenceService,
    private readonly levelAndRoomCommunicationService: LevelAndRoomCommunicationService
  ) {
    this.getRoomsForReceptionDomainPort = roomsPersistenceService
  }
  ngOnInit(): void {
    this.loadRoomsByLevel()
  }
  loadRoomsByLevel() {
    this.levelAndRoomCommunicationService.renderOtherRooms$.subscribe((levelId: number) => {
      console.log(levelId)
      this.getRoomsForReceptionDomainPort.getRoomsByLevel(levelId).subscribe((response: RoomData[]) => {
        console.log(response)
        this.roomList = response
      })
    })
  }
  displayHousting() {

  }
}

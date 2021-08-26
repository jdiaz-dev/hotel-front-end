import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/server/rooms.service';
import { HoustingContainerComponent } from 'src/app/modules/housting/housting/infraestructure/ui/components/housting-container.component';
import { OkService } from 'src/app/shared/services/communication/ok.service';
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
    private dialog: MatDialog,
    private readonly roomsPersistenceService: RoomsPersistenceService,
    private readonly levelAndRoomCommunicationService: LevelAndRoomCommunicationService,
    private okService: OkService
  ) {
    this.getRoomsForReceptionDomainPort = roomsPersistenceService
  }
  ngOnInit(): void {
    this.loadRoomsByLevel()
  }
  loadRoomsByLevel() {
    this.levelAndRoomCommunicationService.renderOtherRooms$.subscribe((levelId: number) => {
      this.getRoomsForReceptionDomainPort.getRoomsByLevel(levelId).subscribe((response: RoomData[]) => {
        this.roomList = response
      })
    })
  }
  displayHousting(room: RoomData) {
    let dialogRef = this.dialog.open(HoustingContainerComponent, { data: room, width: '88%', maxWidth: '100%' })

    /* dialogRef.afterClosed().subscribe((result: boolean) => {

      if (result) {
        this.roomsPersistenceService.removeRoom(room.level.id, room.id).subscribe(response => {
          if (response) this.loadRooms()
        })
      }
    }) */
    this.closeHousting(dialogRef)
  }
  closeHousting(dialogHousting: any) {
    this.okService.activedOkButton$.subscribe((activedOkButton: boolean) => {
      console.log(activedOkButton)
      dialogHousting.close()
      this.ngOnInit()
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/rooms.service';
import { OkService } from 'src/app/shared/services/communication/ok.service';
import { GetRoomsForReceptionDomainPort } from '../../../application/ports/out/other-domains/get-rooms-for-reception-domain.port';
import { LevelAndRoomCommunicationService } from '../services/level-and-room-communication.service';
import { ReceptionModeService } from '../services/reception-mode.service';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {
  private getRoomsForReceptionDomainPort: GetRoomsForReceptionDomainPort
  roomList: RoomData[] = []
  receptionMode!: string

  constructor(
    public activatedRoute: ActivatedRoute,
    private readonly levelAndRoomCommunicationService: LevelAndRoomCommunicationService,
    private readonly okService: OkService,
    private readonly receptionModeService: ReceptionModeService,
    roomsPersistenceService: RoomsPersistenceService,
  ) {
    this.getRoomsForReceptionDomainPort = roomsPersistenceService
  }
  ngOnInit(): void {
    this.loadRoomsByLevel()
    this.checkModeReception()
  }
  loadRoomsByLevel() {
    this.levelAndRoomCommunicationService.renderOtherRooms$.subscribe((levelId: number) => {
      this.getRoomsForReceptionDomainPort.getRoomsByLevel(levelId).subscribe((response: RoomData[]) => {
        this.roomList = response
      })
    })
  }
  checkModeReception() {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.receptionMode = param.mode
    });
  }
  openModeReception(room: RoomData) {
    const currentDialog = this.receptionModeService.activateReceptionMode(this.receptionMode, room)
    this.closeDialogHousting(currentDialog)
  }
  closeDialogHousting(currentDialogMode: any) {
    this.okService.activedOkButton$.subscribe((activedOkButton: boolean) => {
      currentDialogMode.close()
      this.ngOnInit()
    })
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/rooms.service';
import { OkService } from 'src/app/shared/services/communication/ok.service';
import { GetRoomsForReceptionDomainPort } from '../../../application/ports/out/other-domains/get-rooms-for-reception-domain.port';
import { LevelAndRoomCommunicationService } from '../services/level-and-room-communication.service';
import { ReceptionModeService } from '../services/reception-mode.service';
import { CONFIG } from 'src/config/config';
import { Subscription } from 'rxjs';
import { ListRoomMyxin } from './list-room.myxin';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent extends ListRoomMyxin() implements OnInit, OnDestroy {
  private getRoomsForReceptionDomainPort: GetRoomsForReceptionDomainPort
  roomList: RoomData[] = []
  receptionMode!: string
  communicationSubscription!: Subscription

  constructor(
    public activatedRoute: ActivatedRoute,
    private readonly levelAndRoomCommunicationService: LevelAndRoomCommunicationService,
    private readonly okService: OkService,
    private readonly receptionModeService: ReceptionModeService,
    roomsPersistenceService: RoomsPersistenceService,
  ) {
    super()
    this.getRoomsForReceptionDomainPort = roomsPersistenceService
  }
  ngOnInit(): void {
    this.checkModeReception()
    this.loadRoomsByLevel()
  }
  ngOnDestroy(): void {
    this.communicationSubscription.unsubscribe()
  }
  private loadRoomsByLevel() {
    this.communicationSubscription = this.levelAndRoomCommunicationService.renderOtherRooms$.subscribe((levelId: number) => {
      this.getRoomsForReceptionDomainPort.getRoomsByLevel(levelId, this.conditionRooms(this.receptionMode)).subscribe((response: RoomData[]) => {
        this.roomList = response
      })
    })
  }
  private checkModeReception() {
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

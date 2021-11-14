import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/rooms.service';
import { OkService } from 'src/app/shared/services/communication/ok.service';
import { GetRoomsForReceptionDomainPort } from '../../../../application/ports/out/other-domains/get-rooms-for-reception-domain.port';
import { LevelAndRoomCommunicationService } from '../../services/level-and-room-communication.service';
import { ReceptionModeService } from '../../services/reception-mode.service';
import { CONFIG } from 'src/config/config';
import { Subscription } from 'rxjs';
import { ListRoomMyxin } from './list-room.myxin';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReloadRoomsService } from '../../services/reload-rooms.service';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ReloadRoomConditionsService } from '../../services/reload-room-conditions.service';

@Component({
    selector: 'app-list-rooms',
    templateUrl: './list-rooms.component.html',
    styleUrls: ['./list-rooms.component.scss'],
})
export class ListRoomsComponent extends ListRoomMyxin() implements OnInit, OnDestroy {
    private getRoomsForReceptionDomainPort: GetRoomsForReceptionDomainPort;
    private receptionMode!: string;
    private communicationSubscription!: Subscription;
    private currentLevel!: number;
    private subscriptionReloadRooms!: Subscription;
    roomList: RoomData[] = [];
    roomFree: number = CONFIG.CONDITIONS.FREE.ID;
    roomBusy: number = CONFIG.CONDITIONS.BUSY.ID;
    roomCleaning: number = CONFIG.CONDITIONS.CLEANING.ID;

    constructor(
        private readonly levelAndRoomCommunicationService: LevelAndRoomCommunicationService,
        private readonly okService: OkService,
        private readonly receptionModeService: ReceptionModeService,
        private readonly reloadRoomsService: ReloadRoomsService,
        private readonly reloadRoomConditionsService: ReloadRoomConditionsService,
        public activatedRoute: ActivatedRoute,
        roomsPersistenceService: RoomsPersistenceService,
        private dialog: MatDialog,
    ) {
        super();
        this.getRoomsForReceptionDomainPort = roomsPersistenceService;
    }
    ngOnInit(): void {
        this.checkModeReception();
        this.loadCurrentLevel();
        this.reloadRooms();
    }
    ngOnDestroy(): void {
        // this.communicationSubscription.unsubscribe();
        // this.subscriptionReloadRooms.unsubscribe();
    }
    private reloadRooms() {
        this.subscriptionReloadRooms = this.reloadRoomsService.reloadRooms$.subscribe((result: boolean) => {
            if (result) this.loadRooms();
        });
    }
    private loadCurrentLevel() {
        this.communicationSubscription = this.levelAndRoomCommunicationService.renderOtherRooms$.subscribe(
            (levelId: number) => {
                this.currentLevel = levelId;
                this.loadRooms();
            },
        );
    }
    private loadRooms() {
        this.getRoomsForReceptionDomainPort
            .getRoomsByLevel(this.currentLevel, this.conditionRooms(this.receptionMode))
            .subscribe((response: RoomData[]) => {
                console.log(response);
                this.roomList = response;
            });
    }
    private checkModeReception() {
        this.activatedRoute.params.subscribe((param: Params) => {
            this.receptionMode = param.mode;
        });
    }
    openModeReception(room: RoomData) {
        const dialogRef: MatDialogRef<any> | undefined = this.receptionModeService.activateReceptionMode(
            this.receptionMode,
            room,
        );

        console.log(dialogRef);
        if (dialogRef !== undefined) this.closeDialogHousting(dialogRef);
    }

    closeDialogHousting(currentDialogMode: any) {
        this.okService.activedOkButton$.subscribe((activedOkButton: boolean) => {
            currentDialogMode.close();
            this.loadRooms();
            this.reloadRoomConditionsService.reloadRoomConditions(true);
        });
    }
    roomCleanedConfirmed(event: boolean) {
        if (event) this.loadRooms();
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/rooms.service';

import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { CONFIG } from 'src/config/config';
import { IUpdateRoomConditionFromReceptionDomain } from '../../../../application/ports/in/other-domains/update-room-condition-from-reception';

@Component({
    selector: 'app-room-cleaned',
    templateUrl: './room-cleaned.component.html',
    styleUrls: ['./room-cleaned.component.scss'],
})
export class RoomCleanedComponent implements OnInit {
    private updateRoomConditionFromReception: IUpdateRoomConditionFromReceptionDomain;

    @Input('roomId') roomId!: number;
    @Input('roomConditionId') roomConditionId!: number;
    @Output() confirmRoomCleaned = new EventEmitter<boolean>();

    roomCleaning: number = CONFIG.CONDITIONS.CLEANING.ID;
    constructor(private dialog: MatDialog, roomsPersistenceService: RoomsPersistenceService) {
        this.updateRoomConditionFromReception = roomsPersistenceService;
    }

    ngOnInit(): void {}
    roomCleaned() {
        const toCompleteDialog: ICustomMessage = {
            title: 'Actualizar estado de habitación',
            toCompleteDescription: 'cambiar el estado a "LIMPIO"',
        };

        let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '40%' });

        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.updateRoomConditionFromReception.updateTheRoomCondition(this.roomId).subscribe((response) => {
                    if (response) this.confirmRoomCleaned.emit(true);
                });
            }
        });
    }
}

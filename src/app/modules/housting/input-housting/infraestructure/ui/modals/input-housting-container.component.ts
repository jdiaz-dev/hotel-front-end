import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';
import { OkComponent } from 'src/app/shared/modals/ok.component';

@Component({
    selector: 'app-input-housting-container',
    templateUrl: './input-housting-container.component.html',
    styleUrls: ['./input-housting-container.component.scss'],
})
export class InputHoustingContainerComponent {
    @ViewChild('DATA_CLIENT') childClient: any;
    @ViewChild('DATA_HOUSTING') childHousting: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: RoomData, private dialog: MatDialog) {}

    createHoustinConfirmed(event: boolean) {
        if (event) {
            //using methods of children components
            this.childClient.saveClient();
            this.childHousting.saveHousting();
            this.openDialogOk();
        }
    }
    private openDialogOk() {
        const config: IOkComponentConfig = {
            message: 'Un alojamiento ha sido añadido con éxito',
            useMethodsOkComponent: true,
        };
        let dialogRef = this.dialog.open(OkComponent, { data: config, width: '25%' });
    }
}

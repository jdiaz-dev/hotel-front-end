import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { OutputHoustingContainerComponent } from 'src/app/modules/housting/output-housting/infraestructure/ui/components/output-housting-container.component';
import { InputHoustingContainerComponent } from '../../../../input-housting/infraestructure/ui/modals/input-housting-container.component';
import { CONFIG } from 'src/config/config';

import { ProductSalesContainerComponent } from 'src/app/modules/sales/product-sales/infraestructure/ui/modals/product-sales/product-sales-container.component';
import { IConfigDialog } from '../interfaces/config-dialog';

@Injectable()
export class ReceptionModeService {
    constructor(private dialog: MatDialog, private overlay: Overlay) {}
    private displayDialogReception(
        room: RoomData,
        conditionRoom: string,
        dialogComponent: any,
        configDialog: IConfigDialog,
    ) {
        let modeReceptionDialog: MatDialogRef<any> | undefined;

        if (room.condition.nameCondition === conditionRoom) {
            modeReceptionDialog = this.dialog.open(dialogComponent, {
                data: room,
                width: configDialog.width,
                height: configDialog.height,
                maxWidth: '100%',
                // scrollStrategy: this.overlay.scrollStrategies.noop(),
            });
        }
        return modeReceptionDialog;
    }
    activateReceptionMode(receptionMode: string, room: RoomData) {
        let modeReceptionDialog, conditionRoom, configDialog: IConfigDialog;
        if (receptionMode === CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
            configDialog = { width: '75%', height: '470px' };
            conditionRoom = CONFIG.CONDITIONS.FREE.NAME;
            modeReceptionDialog = this.displayDialogReception(
                room,
                conditionRoom,
                InputHoustingContainerComponent,
                configDialog,
            );
        } else if (receptionMode === CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING) {
            configDialog = { width: '86%', height: '500px' };
            conditionRoom = CONFIG.CONDITIONS.BUSY.NAME;
            modeReceptionDialog = this.displayDialogReception(
                room,
                conditionRoom,
                OutputHoustingContainerComponent,
                configDialog,
            );
        } else if (receptionMode === CONFIG.RECEPTION_MODE.PRODUCT_SALES) {
            configDialog = { width: '75%', height: '420px' };
            conditionRoom = CONFIG.CONDITIONS.BUSY.NAME;
            modeReceptionDialog = this.displayDialogReception(
                room,
                conditionRoom,
                ProductSalesContainerComponent,
                configDialog,
            );
        }
        return modeReceptionDialog;
    }
}

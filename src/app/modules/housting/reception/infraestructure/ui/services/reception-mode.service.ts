import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { OutputHoustingContainerComponent } from 'src/app/modules/housting/output-housting/infraestructure/ui/modals/output-housting/output-housting-container.component';
import { InputHoustingContainerComponent } from '../../../../input-housting/infraestructure/ui/modals/input-housting-container.component';
import { CONFIG } from 'src/config/config';

import { ProductSalesContainerComponent } from 'src/app/modules/sales/product-sales/infraestructure/ui/modals/product-sales/product-sales-container.component';
import { IConfigDialog } from '../interfaces/config-dialog';
import { StateCashService } from 'src/app/shared/services/state-cash.service';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';
import { OkComponent } from 'src/app/shared/modals/ok.component';

@Injectable()
export class ReceptionModeService {
    constructor(private dialog: MatDialog, private stateCash: StateCashService, private overlay: Overlay) {}

    activateReceptionMode(receptionMode: string, room: RoomData) {
        let modeReceptionDialog;

        if (receptionMode === CONFIG.RECEPTION_MODE.INPUT_HOUSTING && !this.stateCash.getCashId()) {
            this.openDialogMessage();
        } else if (receptionMode === CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
            modeReceptionDialog = this.openInputHoustingDialog(room);
        } else if (receptionMode === CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING) {
            console.log(receptionMode, CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING);
            modeReceptionDialog = this.openOutputHoustingDialog(room);
        } else if (receptionMode === CONFIG.RECEPTION_MODE.PRODUCT_SALES) {
            modeReceptionDialog = this.openProductSalesDialog(room);
        }

        return modeReceptionDialog;
    }
    private openInputHoustingDialog(room: RoomData) {
        const configDialog: IConfigDialog = { width: '72%', height: '470px' };
        const conditionRoom = CONFIG.CONDITIONS.FREE.NAME;
        const modeReceptionDialog = this.displayDialogReception(
            room,
            conditionRoom,
            InputHoustingContainerComponent,
            configDialog,
        );
        return modeReceptionDialog;
    }
    private openOutputHoustingDialog(room: RoomData) {
        const configDialog: IConfigDialog = { width: '80%', height: '500px' };
        const conditionRoom = CONFIG.CONDITIONS.BUSY.NAME;
        const modeReceptionDialog = this.displayDialogReception(
            room,
            conditionRoom,
            OutputHoustingContainerComponent,
            configDialog,
        );
        return modeReceptionDialog;
    }
    private openProductSalesDialog(room: RoomData) {
        const configDialog: IConfigDialog = { width: '75%', height: '420px' };
        const conditionRoom = CONFIG.CONDITIONS.BUSY.NAME;
        const modeReceptionDialog = this.displayDialogReception(
            room,
            conditionRoom,
            ProductSalesContainerComponent,
            configDialog,
        );
        return modeReceptionDialog;
    }
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
    private openDialogMessage() {
        const config: IOkComponentConfig = {
            message: 'Necesitas crear una caja para alquilar una habitacion',
            useMethodsOkComponent: true,
        };
        this.dialog.open(OkComponent, { data: config, width: '25%' });
    }
}

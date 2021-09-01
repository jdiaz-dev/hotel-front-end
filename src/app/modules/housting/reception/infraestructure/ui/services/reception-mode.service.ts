import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { OutputHoustingContainerComponent } from 'src/app/modules/housting/output-housting/infraestructure/ui/components/output-housting-container.component';
import { InputHoustingContainerComponent } from '../../../../input-housting/infraestructure/ui/modals/input-housting-container.component';
import { CONFIG } from 'src/config/config';

import { ProductSalesContainerComponent } from 'src/app/modules/sales/product-sales/infraestructure/ui/modals/product-sales-container.component';

@Injectable()
export class ReceptionModeService {

  constructor(
    private dialog: MatDialog,
  ) { }
  private displayDialogReception(room: RoomData, conditionRoom: string, dialogComponent: any) {
    let modeReceptionDialog: MatDialogRef<any> | undefined

    if (room.condition.nameCondition === conditionRoom) {
      modeReceptionDialog = this.dialog.open(dialogComponent, { data: room, width: '88%', maxWidth: '100%' })
    }
    return modeReceptionDialog
  }
  activateReceptionMode(receptionMode: string, room: RoomData) {
    let modeReceptionDialog, conditionRoom
    if (receptionMode === CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
      conditionRoom = CONFIG.CONDITIONS.FREE.NAME
      modeReceptionDialog = this.displayDialogReception(room, conditionRoom, InputHoustingContainerComponent)

    } else if (receptionMode === CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING) {
      conditionRoom = CONFIG.CONDITIONS.BUSY.NAME
      modeReceptionDialog = this.displayDialogReception(room, conditionRoom, OutputHoustingContainerComponent)

    } else if (receptionMode === CONFIG.RECEPTION_MODE.PRODUCT_SALES) {
      conditionRoom = CONFIG.CONDITIONS.BUSY.NAME
      modeReceptionDialog = this.displayDialogReception(room, conditionRoom, ProductSalesContainerComponent)

    }
    return modeReceptionDialog
  }
}

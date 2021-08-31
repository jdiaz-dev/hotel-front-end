import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { OutputHoustingContainerComponent } from 'src/app/modules/housting/output-housting/infraestructure/ui/components/output-housting-container.component';
import { InputHoustingContainerComponent } from '../../../../input-housting/infraestructure/ui/modals/input-housting-container.component';
import { CONFIG } from 'src/config/config';
import { ProductSalesContainerComponent } from './../../../../../sales/product-sales/infraestructure/ui/components/product-sales-container.component';

@Injectable()
export class ReceptionModeService {

  constructor(
    private dialog: MatDialog,
  ) { }
  private displayinputHousting(room: RoomData) {
    let dialogRef = this.dialog.open(InputHoustingContainerComponent, { data: room, width: '88%', maxWidth: '100%' })
    return dialogRef
  }
  private displayOutputHousting(room: RoomData) {
    let dialogRef = this.dialog.open(OutputHoustingContainerComponent, { data: room, width: '88%', maxWidth: '100%' })
    return dialogRef
  }
  private displayProductSales(room: RoomData) {
    let dialogRef = this.dialog.open(ProductSalesContainerComponent, { data: room, width: '88%', maxWidth: '100%' })
    return dialogRef
  }
  activateReceptionMode(receptionMode: string, room: RoomData) {
    let dialog
    if (receptionMode === CONFIG.RECEPTION_MODE.INPUT_HOUSTING) {
      dialog = this.displayinputHousting(room)
    } else if (receptionMode === CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING) {
      dialog = this.displayOutputHousting(room)
    } else if (receptionMode === CONFIG.RECEPTION_MODE.PRODUCT_SALES) {
      dialog = this.displayProductSales(room)
    }
    return dialog
  }
}

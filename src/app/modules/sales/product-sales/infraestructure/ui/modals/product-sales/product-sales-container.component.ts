import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';
import { OkComponent } from 'src/app/shared/modals/ok.component';

@Component({
    selector: 'app-product-sales-container',
    templateUrl: './product-sales-container.component.html',
    styleUrls: ['./product-sales-container.component.scss'],
})
export class ProductSalesContainerComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public room: RoomData, private dialog: MatDialog) {}

    ngOnInit(): void {}
    saveProductsConfirmed(event: boolean) {
        if (event) this.openDialogOk();
    }
    private openDialogOk() {
        const config: IOkComponentConfig = {
            message: 'La venta ha sido realizada con exito',
            useMethodsOkComponent: true,
        };
        let dialogRef = this.dialog.open(OkComponent, { data: config, width: '25%' });
    }
}

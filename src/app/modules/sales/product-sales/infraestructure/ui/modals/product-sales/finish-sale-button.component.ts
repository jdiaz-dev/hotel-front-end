import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { payed } from '../../models/product-added.model';
import { IOkComponentConfig } from './../../../../../../../shared/interfaces/ok-component-config/ok-component-config.interface';
import { MatDialog } from '@angular/material/dialog';
import { OkComponent } from 'src/app/shared/modals/ok.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { FinishSaleService } from './services/finish-sale.service';

@Component({
    selector: 'app-finish-sale-button',
    templateUrl: './finish-sale-button.component.html',
    styleUrls: ['./finish-sale-button.component.scss'],
})
export class FinishSaleButtonComponent implements OnInit {
    @Output() saleConfirmed = new EventEmitter<boolean>();

    productPayed!: payed;

    constructor(private dialog: MatDialog, private finishSaleService: FinishSaleService) {}

    ngOnInit(): void {}
    buyProducts() {
        if (this.productPayed !== undefined) {
            this.openDialogToConfirmBuyProducts();
        } else {
            this.markStateProductSaleDialog();
        }
    }
    openDialogToConfirmBuyProducts() {
        const config: ICustomMessage = {
            title: 'Vender productos',
            toCompleteDescription: 'de realizar esta venta',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: config, width: '25%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.finishSaleService.confirmFinishSale(result);
                this.saleConfirmed.emit(true);
            }
        });
    }
    markStateProductSaleDialog() {
        const config: IOkComponentConfig = {
            message: 'Porfavor selecciona el estado de la venta',
            useMethodsOkComponent: false,
        };
        let okDialog = this.dialog.open(OkComponent, {
            data: config,
        });
    }
}

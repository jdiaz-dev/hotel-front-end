import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ProductAddedData } from '../../classes/product-added-data';
import { AvailableProductsComponent } from '../available-products/available-products.component';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss'],
})
export class ProductsAddedComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<ProductAddedData>;
  productsAdded: ProductAddedData[] = [];
  displayedColumns: string[] = ['Amount', 'Name', 'Description', 'Price', 'Details', 'RemoveButton'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    let modeReceptionDialog = this.dialog.open(AvailableProductsComponent, {
      width: '58%',
      maxWidth: '100%',
    });
    modeReceptionDialog.componentInstance.productAdded.subscribe((productData: ProductAddedData) => {
      this.productsAdded.push(productData);
      this.addProduct(productData);
      this.table.renderRows();
    });
  }
  addProduct(productData: ProductAddedData) {
    //let productAdded = new ProductAddedDescription()
  }
  removeProductAdded(room: ProductAddedData) {
    /* const toCompleteDialog: CustomMessage = {
      title: 'Eliminar habitación',
      toCompleteDescription: 'esta habitación'
    }
    let dialogRef = this.dialog.open(ConfirmRemoveComponent, { data: toCompleteDialog, width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {

      if (result) {
        this.roomsPersistenceService.removeRoom(room.level.id, room.id).subscribe(response => {
          if (response) this.loadRooms()
        })
      }
    }) */
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ProductAddedData } from '../../models/product-added-data';
import { AvailableProductsComponent } from '../available-products/available-products.component';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss'],
})
export class ProductsAddedComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<ProductAddedData>;
  productsAdded: ProductAddedData[] = [];
  displayedColumns: string[] = ['Amount', 'Name', 'Description', 'Price', 'TotalPrice', 'RemoveButton'];
  totalPrice: number = 0;

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
      this.calculateTotalPrice();
    });
  }
  addProduct(productData: ProductAddedData) {
    //let productAdded = new ProductAddedDescription()
  }
  removeProductAdded(productId: number) {
    this.productsAdded = this.productsAdded.filter((product: ProductAddedData) => product.id !== productId);
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = this.productsAdded.reduce((total, product: ProductAddedData) => {
      return total + product.price * product.amount;
    }, 0);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddedData } from '../../classes/product-added-data';
import { AvailableProductsComponent } from '../available-products/available-products.component';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss'],
})
export class ProductsAddedComponent implements OnInit {
  productsAdded: ProductAddedData[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    let modeReceptionDialog = this.dialog.open(AvailableProductsComponent, {
      width: '63%',
      maxWidth: '100%',
    });
    modeReceptionDialog.componentInstance.productAdded.subscribe((productData: ProductAddedData) => {
      console.log(productData);
      this.productsAdded.push(productData);
      this.addProduct(productData);
    });
  }
  addProduct(productData: ProductAddedData) {
    //let productAdded = new ProductAddedDescription()
  }
}

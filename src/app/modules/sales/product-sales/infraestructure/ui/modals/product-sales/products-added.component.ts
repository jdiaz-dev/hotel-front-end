import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductData } from 'src/app/shared/interfaces/product-data';
import { ProductAddedDescription } from '../../classes/product-added-description';
import { AvailableProductsComponent } from '../product-list/available-products.component';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss']
})
export class ProductsAddedComponent implements OnInit {
  productsAdded: ProductAddedDescription[] = []

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog() {
    let modeReceptionDialog = this.dialog.open(AvailableProductsComponent, { width: '63%', maxWidth: '100%' })
    /* modeReceptionDialog.componentInstance.productAdded.subscribe((productData: ProductData) => {
      console.log(productData)
      this.addProduct(productData)
    }) */
  }
  addProduct(productData: ProductData) {
    //let productAdded = new ProductAddedDescription()
  }
}

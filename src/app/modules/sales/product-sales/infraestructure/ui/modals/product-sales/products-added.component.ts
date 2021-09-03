import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListContainerComponent } from '../product-list/product-list-container.component';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss']
})
export class ProductsAddedComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  openDialog() {
    let modeReceptionDialog = this.dialog.open(ProductListContainerComponent, { width: '50%', maxWidth: '100%' })
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateProductComponent } from '../modals/create-update-product.component';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  reloadProductCollectionComponent!: number
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadProductCollectionComponent = 0
  }
  openDialog() {
    let dialogRef = this.dialog.open(CreateUpdateProductComponent, { width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.reloadProductCollectionComponent++
    })
  }
}

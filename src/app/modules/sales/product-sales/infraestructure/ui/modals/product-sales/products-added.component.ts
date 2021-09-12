import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { payed, ProductAddedModel } from '../../models/product-added.model';
import { AvailableProductsComponent } from '../available-products/available-products.component';
import { ProductSalesService } from './../../../out/product-sales.service';
import { HoustingIdServiceService } from './housting-id-service.service';
import { OkComponent } from './../../../../../../../shared/modals/ok.component';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss'],
})
export class ProductsAddedComponent implements OnInit {
  @ViewChild(MatTable) private table!: MatTable<ProductAddedModel>;
  productsAdded: ProductAddedModel[] = [];
  displayedColumns: string[] = ['Amount', 'Name', 'Description', 'Price', 'TotalPrice', 'RemoveButton'];
  totalPrice: number = 0;
  productPayed!: payed;
  houstingId!: number;

  constructor(
    private dialog: MatDialog,
    private productSalesService: ProductSalesService,
    private houstingIdServiceService: HoustingIdServiceService,
  ) {}

  ngOnInit(): void {
    this.loadHoustingId();
  }
  aggregateProductsDialog() {
    let availableProductsDialog = this.dialog.open(AvailableProductsComponent, {
      width: '58%',
      maxWidth: '100%',
    });
    availableProductsDialog.componentInstance.productAdded.subscribe((productData: ProductAddedModel) => {
      this.productsAdded.push(productData);
      this.table.renderRows();
      this.calculateTotalPrice();
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
  removeProductAdded(productId: number) {
    this.productsAdded = this.productsAdded.filter(
      (product: ProductAddedModel) => product.productId !== productId,
    );
    this.calculateTotalPrice();
  }
  private calculateTotalPrice() {
    this.totalPrice = this.productsAdded.reduce((total, product: ProductAddedModel) => {
      return total + product.price * product.amount;
    }, 0);
  }
  buyProducts() {
    if (this.productPayed !== undefined) {
      this.productsAdded = this.productsAdded.map((product: ProductAddedModel) => {
        product.payed = this.productPayed;

        this.productSalesService.createProductSale(product, this.houstingId).subscribe((response) => {
          console.log(response);
        });
        return product;
      });
    } else {
      this.markStateProductSaleDialog();
    }
  }
  private loadHoustingId() {
    this.houstingIdServiceService.productId$.subscribe((result: number) => {
      this.houstingId = result;
    });
  }
}

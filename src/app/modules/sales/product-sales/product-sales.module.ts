import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesRoutingModule } from './product-sales-routing.module';
import { ProductSalesContainerComponent } from './infraestructure/ui/modals/product-sales/product-sales-container.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HoustingDataComponent } from './infraestructure/ui/modals/product-sales/housting-data.component';
import { AvailableProductsComponent } from './infraestructure/ui/modals/product-list/available-products.component';
import { ProductsAddedComponent } from './infraestructure/ui/modals/product-sales/products-added.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductSalesContainerComponent,
    HoustingDataComponent,
    AvailableProductsComponent,
    ProductsAddedComponent
  ],
  imports: [
    CommonModule,
    ProductSalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductSalesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesRoutingModule } from './product-sales-routing.module';
import { ProductSalesContainerComponent } from './infraestructure/ui/modals/product-sales/product-sales-container.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HoustingDataComponent } from './infraestructure/ui/modals/product-sales/housting-data.component';
import { ProductListContainerComponent } from './infraestructure/ui/modals/product-list/product-list-container.component';
import { ProductsAddedComponent } from './infraestructure/ui/modals/product-sales/products-added.component';

@NgModule({
  declarations: [
    ProductSalesContainerComponent,
    HoustingDataComponent,
    ProductListContainerComponent,
    ProductsAddedComponent
  ],
  imports: [
    CommonModule,
    ProductSalesRoutingModule,
    SharedModule
  ]
})
export class ProductSalesModule { }

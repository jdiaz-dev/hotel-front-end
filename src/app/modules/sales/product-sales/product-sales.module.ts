import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesRoutingModule } from './product-sales-routing.module';
import { ProductSalesContainerComponent } from './infraestructure/ui/components/product-sales-container.component';

@NgModule({
  declarations: [
    ProductSalesContainerComponent
  ],
  imports: [
    CommonModule,
    ProductSalesRoutingModule,
  ]
})
export class ProductSalesModule { }

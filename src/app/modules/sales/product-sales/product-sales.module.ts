import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesRoutingModule } from './product-sales-routing.module';
import { ProductSalesContainerComponent } from './infraestructure/ui/components/product-sales-container.component';
import { ReceptionModule } from './../../housting/reception/reception.module';


@NgModule({
  declarations: [
    ProductSalesContainerComponent
  ],
  imports: [
    CommonModule,
    ProductSalesRoutingModule,
    ReceptionModule
  ]
})
export class ProductSalesModule { }

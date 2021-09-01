import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesRoutingModule } from './product-sales-routing.module';
import { ProductSalesContainerComponent } from './infraestructure/ui/modals/product-sales-container.component';
import { HoustingDataComponent } from './infraestructure/ui/modals/housting-data.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductSalesContainerComponent,
    HoustingDataComponent
  ],
  imports: [
    CommonModule,
    ProductSalesRoutingModule,
    SharedModule
  ]
})
export class ProductSalesModule { }

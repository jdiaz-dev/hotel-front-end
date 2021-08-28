import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCollectionComponent } from './infraestructure/ui/components/product-collection.component';
import { CreateUpdateProductComponent } from './infraestructure/ui/modals/create-update-product.component';
import { ProductsContainerComponent } from './infraestructure/ui/components/products-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductCollectionComponent,
    CreateUpdateProductComponent,
    ProductsContainerComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }

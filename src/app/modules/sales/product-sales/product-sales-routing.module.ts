import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSalesContainerComponent } from './infraestructure/ui/components/product-sales-container.component';

const routes: Routes = [
  { path: '', component: ProductSalesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSalesRoutingModule { }

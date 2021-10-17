import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesRoutingModule } from './product-sales-routing.module';
import { ProductSalesContainerComponent } from './infraestructure/ui/modals/product-sales/product-sales-container.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HoustingDataComponent } from './infraestructure/ui/modals/product-sales/housting-data.component';
import { AvailableProductsComponent } from './infraestructure/ui/modals/available-products/available-products.component';
import { ProductsAddedComponent } from './infraestructure/ui/modals/product-sales/products-added.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAmountProductsComponent } from './infraestructure/ui/modals/available-products/form-amount-products.component';
import { AggregateProductsButtonComponent } from './infraestructure/ui/modals/available-products/aggregate-products-button.component';
import { AddProductsButtonComponent } from './infraestructure/ui/modals/product-sales/add-products-button.component';
import { FinishSaleButtonComponent } from './infraestructure/ui/modals/product-sales/finish-sale-button.component';

@NgModule({
    declarations: [
        ProductSalesContainerComponent,
        HoustingDataComponent,
        AvailableProductsComponent,
        ProductsAddedComponent,
        FormAmountProductsComponent,
        AggregateProductsButtonComponent,
        AddProductsButtonComponent,
        FinishSaleButtonComponent,
    ],
    imports: [CommonModule, ProductSalesRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class ProductSalesModule {}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddedModel } from '../../models/product-added.model';
import { AvailableProductsComponent } from '../available-products/available-products.component';
import { ProductsChosenService } from './services/products-chosen.service';

@Component({
    selector: 'app-add-products-button',
    templateUrl: './add-products-button.component.html',
    styleUrls: ['./add-products-button.component.scss'],
})
export class AddProductsButtonComponent implements OnInit {
    constructor(private dialog: MatDialog, private productsChosenService: ProductsChosenService) {}

    ngOnInit(): void {}

    aggregateProductsDialog() {
        let availableProductsDialog = this.dialog.open(AvailableProductsComponent, {
            width: '58%',
            maxWidth: '100%',
        });
        availableProductsDialog.componentInstance.productAdded.subscribe((productData: ProductAddedModel) => {
            this.productsChosenService.sendProductChosen(productData);
        });
    }
}

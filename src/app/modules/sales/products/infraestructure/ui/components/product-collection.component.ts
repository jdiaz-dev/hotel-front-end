import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { ProductsService } from '../../out/products.service';
import { GetProductsResponse, ProductData } from '../../../../../../shared/interfaces/product/get-product-response';
import { CreateUpdateProductComponent } from './../modals/create-update-product.component';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

@Component({
    selector: 'app-product-collection',
    templateUrl: './product-collection.component.html',
    styleUrls: ['./product-collection.component.scss'],
})
export class ProductCollectionComponent implements OnChanges, OnInit {
    @Input('reload') reloadThisComponent!: number;
    products: ProductData[] = [];
    displayedColumns: string[] = ['Code', 'Name', 'Brand', 'Details', 'Price', 'EditButton', 'RemoveButton'];
    constructor(private dialog: MatDialog, private productsService: ProductsService) {}

    ngOnChanges() {
        if (this.reloadThisComponent) this.loadProducts();
    }
    ngOnInit(): void {
        this.loadProducts();
    }
    loadProducts() {
        let queries: IQueries = { limit: 8, offset: 0 };
        this.productsService.getProducts(queries).subscribe((response: GetProductsResponse) => {
            //console.log(response);
            this.products = response.rows;
        });
    }

    editLevelDiaglog(productData: ProductData) {
        let dialogRef = this.dialog.open(CreateUpdateProductComponent, {
            data: productData,
            width: '40%',
        });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) this.loadProducts();
        });
    }
    removeLevelDialog(productId: number) {
        const toCompleteDialog: ICustomMessage = {
            title: 'Eliminar producto',
            toCompleteDescription: 'este producto',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, {
            data: toCompleteDialog,
            width: '40%',
        });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.productsService.removeProduct(productId).subscribe((response) => {
                    if (response) this.loadProducts();
                });
            }
        });
    }
}

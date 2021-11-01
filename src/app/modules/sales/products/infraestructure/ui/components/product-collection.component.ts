import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { ProductsService } from '../../out/products.service';
import { GetProductsResponse, ProductData } from '../../../../../../shared/interfaces/product/get-product-response';
import { CreateUpdateProductComponent } from './../modals/create-update-product.component';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';
import { IKeywordToSearchDip } from 'src/app/shared/components/searcher/dip/keyword-to-search';
import { SearcherService } from 'src/app/shared/components/searcher/searcher.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-collection',
    templateUrl: './product-collection.component.html',
    styleUrls: ['./product-collection.component.scss'],
})
export class ProductCollectionComponent extends BasePaginator implements OnChanges, OnInit, OnDestroy {
    private keywordToSearchDip: IKeywordToSearchDip;
    private theKeyword!: string;

    @Input('reload') reloadThisComponent!: number;
    products: ProductData[] = [];
    displayedColumns: string[] = ['Code', 'Name', 'Brand', 'Details', 'Price', 'EditButton', 'RemoveButton'];
    totalProducts!: number;

    private keywordToSearchSubs!: Subscription;

    constructor(private dialog: MatDialog, private productsService: ProductsService, searcherService: SearcherService) {
        super();
        this.keywordToSearchDip = searcherService;
    }

    ngOnChanges() {
        if (this.reloadThisComponent) this.loadProducts();
    }
    ngOnInit(): void {
        this.theKeyword = '';
        this.loadProducts();
        this.obtainKeyword();
    }
    ngOnDestroy(): void {
        if (this.keywordToSearchSubs) this.keywordToSearchSubs.unsubscribe();
    }
    loadProducts(offset?: number) {
        let queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
            searchText: this.theKeyword,
        };
        this.productsService.getProducts(queries).subscribe((response: GetProductsResponse) => {
            //console.log(response);
            this.totalProducts = response.count;
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
    loadNextProducts(offset: number) {
        this.loadProducts(offset);
    }
    private obtainKeyword() {
        this.keywordToSearchSubs = this.keywordToSearchDip.keywordToSearch$.subscribe((keyword: string) => {
            this.theKeyword = keyword;
            this.loadProducts();
        });
    }
}

import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { payed, ProductAddedModel } from '../../models/product-added.model';
import { ProductSaledService } from './../../../out/product-sales.service';
import { HoustingIdService } from './services/housting-id.service';
import { ProductsChosenService } from './services/products-chosen.service';
import { FinishSaleService } from './services/finish-sale.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-products-added',
    templateUrl: './products-added.component.html',
    styleUrls: ['./products-added.component.scss'],
})
export class ProductsAddedComponent implements OnInit, OnDestroy {
    @ViewChild(MatTable) private table!: MatTable<ProductAddedModel>;
    productsAdded: ProductAddedModel[] = [];
    displayedColumns: string[] = ['Amount', 'Name', 'Description', 'Price', 'TotalPrice', 'RemoveButton'];
    totalPrice: number = 0;
    productPayed!: payed;
    houstingId!: number;
    productsChosenSubs!: Subscription;
    finishSaleSubs!: Subscription;
    houstingIdSubs!: Subscription;

    constructor(
        private productSaledService: ProductSaledService,
        private houstingIdService: HoustingIdService,
        private productsChosenService: ProductsChosenService,
        private finishSaleService: FinishSaleService,
    ) {}

    ngOnInit(): void {
        this.loadHoustingId();
        this.aggregateProductsDialog();
        this.buyProducts();
    }
    ngOnDestroy() {
        this.productsChosenSubs.unsubscribe();
        this.finishSaleSubs.unsubscribe();
        this.houstingIdSubs.unsubscribe();
    }
    aggregateProductsDialog() {
        this.productsChosenSubs = this.productsChosenService.productsChosen$.subscribe((product: ProductAddedModel) => {
            this.productsAdded.push(product);
            this.table.renderRows();
            this.calculateTotalPrice();
        });
    }
    removeProductAdded(productId: number) {
        this.productsAdded = this.productsAdded.filter((product: ProductAddedModel) => product.productId !== productId);
        this.calculateTotalPrice();
    }
    private calculateTotalPrice() {
        this.totalPrice = this.productsAdded.reduce((total, product: ProductAddedModel) => {
            return total + product.price * product.amount;
        }, 0);
    }
    private buyProducts() {
        this.finishSaleSubs = this.finishSaleService.finishSale$.subscribe(
            (statePayment: { payed: payed; finish: boolean }) => {
                if (statePayment.finish) {
                    this.productsAdded.map((product: ProductAddedModel) => (product.payed = statePayment.payed));
                    console.log('------------productsAdded', this.productsAdded);

                    this.productSaledService
                        .createProductSaled(this.productsAdded, this.houstingId)
                        .subscribe((response) => {
                            // console.log(response);
                        });
                }
            },
        );
    }
    private loadHoustingId() {
        this.houstingIdSubs = this.houstingIdService.productId$.subscribe((result: number) => {
            this.houstingId = result;
        });
    }
}

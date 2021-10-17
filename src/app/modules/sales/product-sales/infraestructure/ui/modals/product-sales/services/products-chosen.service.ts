import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductAddedModel } from '../../../models/product-added.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsChosenService {
    private productsChosenSource = new Subject<ProductAddedModel>();
    productsChosen$ = this.productsChosenSource.asObservable();

    constructor() {}
    sendProductChosen(product: ProductAddedModel) {
        this.productsChosenSource.next(product);
    }
}

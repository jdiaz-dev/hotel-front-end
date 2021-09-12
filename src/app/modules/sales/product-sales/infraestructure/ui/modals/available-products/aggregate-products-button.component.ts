import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';
import { AddAmountProductsService } from './add-amount-products.service';

@Component({
  selector: 'app-aggregate-products-button',
  templateUrl: './aggregate-products-button.component.html',
  styleUrls: ['./aggregate-products-button.component.scss'],
})
export class AggregateProductsButtonComponent implements OnInit {
  @Input('amountProducts') amountProducts!: IAmountProduct;
  @Output('totalProduct') totalProduct = new EventEmitter<any>();

  constructor(private addAmountProductsService: AddAmountProductsService) {}

  ngOnInit() {
    this.addAmountProductsService.addAmountProduct$.subscribe((amountProduct: IAmountProduct) => {
      //checking if ids of aggregate products button and form amount are equals

      if (this.amountProducts.id === amountProduct.id) {
        this.amountProducts.amount = amountProduct.amount;
      }
    });
  }
  aggregateAmountToProduct() {
    let maxDigitsAllowed = 4;
    if (this.amountProducts.amount > 0 && this.amountProducts.amount.toString().length <= maxDigitsAllowed) {
      this.totalProduct.emit(this.amountProducts);
    }
  }
}

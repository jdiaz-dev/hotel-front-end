import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';

@Component({
  selector: 'app-form-amount-products',
  templateUrl: './form-amount-products.component.html',
  styleUrls: ['./form-amount-products.component.scss'],
})
export class FormAmountProductsComponent implements OnChanges {
  @Input('amountProducts') amountProducts!: IAmountProduct;
  @Output('totalProduct') totalProduct = new EventEmitter<any>();
  amountProducstAdded = new FormControl('', [Validators.pattern(REG_EXP.numeric), Validators.maxLength(3)]);

  constructor() {}
  ngOnChanges() {}
  updateAmountProducts() {
    if (this.amountProducstAdded.value > 0 && this.amountProducstAdded.valid) {
      let _totalProducts = { id: this.amountProducts.id, amount: this.amountProducstAdded.value };
      this.totalProduct.emit(_totalProducts);
    }
  }
}

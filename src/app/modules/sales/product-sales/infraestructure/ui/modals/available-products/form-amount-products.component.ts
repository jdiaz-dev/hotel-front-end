import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';
import { AddAmountProductsService } from './add-amount-products.service';

@Component({
  selector: 'app-form-amount-products',
  templateUrl: './form-amount-products.component.html',
  styleUrls: ['./form-amount-products.component.scss'],
})
export class FormAmountProductsComponent implements OnChanges {
  @Input('amountProduct') amountProduct!: IAmountProduct;
  amountProducstAdded = new FormControl('', [Validators.pattern(REG_EXP.numeric), Validators.maxLength(4)]);

  constructor(private addAmountProductsService: AddAmountProductsService) {}
  ngOnInit() {}
  ngOnChanges() {}
  sendAmountProducts() {
    let ammountProduct: IAmountProduct = {
      id: this.amountProduct.id,
      amount: this.amountProducstAdded.value,
      indexArray: this.amountProduct.indexArray,
    };
    this.addAmountProductsService.addAmountProduct(ammountProduct);
  }
}

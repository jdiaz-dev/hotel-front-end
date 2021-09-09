import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';

@Injectable({
  providedIn: 'root',
})

/* service to communicate aggregate product button and form amount components */
export class AddAmountProductsService {
  private addAmountProductSource = new Subject<IAmountProduct>();
  addAmountProduct$ = this.addAmountProductSource.asObservable();

  constructor() {}
  addAmountProduct(amountProducts: IAmountProduct) {
    this.addAmountProductSource.next(amountProducts);
  }
}

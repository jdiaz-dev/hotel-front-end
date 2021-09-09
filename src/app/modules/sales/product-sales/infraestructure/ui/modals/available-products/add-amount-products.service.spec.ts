import { TestBed } from '@angular/core/testing';

import { AddAmountProductsService } from './add-amount-products.service';

describe('AddAmountProductsService', () => {
  let service: AddAmountProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAmountProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

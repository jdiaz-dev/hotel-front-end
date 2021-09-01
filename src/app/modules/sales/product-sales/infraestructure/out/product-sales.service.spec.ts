import { TestBed } from '@angular/core/testing';

import { ProductSalesService } from './product-sales.service';

describe('ProductSalesService', () => {
  let service: ProductSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

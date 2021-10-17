import { TestBed } from '@angular/core/testing';

import { ProductsChosenService } from './products-chosen.service';

describe('ProductsChosenService', () => {
  let service: ProductsChosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsChosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

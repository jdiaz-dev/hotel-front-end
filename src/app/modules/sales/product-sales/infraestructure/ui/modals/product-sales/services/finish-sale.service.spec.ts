import { TestBed } from '@angular/core/testing';

import { FinishSaleService } from './finish-sale.service';

describe('FinishSaleService', () => {
  let service: FinishSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinishSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

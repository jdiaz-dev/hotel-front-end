import { TestBed } from '@angular/core/testing';

import { CashService } from './cash.service';

describe('CashService', () => {
  let service: CashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

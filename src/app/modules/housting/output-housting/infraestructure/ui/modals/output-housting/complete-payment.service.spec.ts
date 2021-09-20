import { TestBed } from '@angular/core/testing';

import { CompletePaymentService } from './complete-payment.service';

describe('CompletePaymentService', () => {
  let service: CompletePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

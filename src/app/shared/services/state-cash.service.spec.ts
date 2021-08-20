import { TestBed } from '@angular/core/testing';

import { StateCashService } from './state-cash.service';

describe('StateCashService', () => {
  let service: StateCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

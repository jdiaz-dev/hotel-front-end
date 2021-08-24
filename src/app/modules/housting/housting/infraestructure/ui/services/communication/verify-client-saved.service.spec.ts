import { TestBed } from '@angular/core/testing';

import { VerifyClientSavedService } from './verify-client-saved.service';

describe('VerifyClientSavedService', () => {
  let service: VerifyClientSavedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyClientSavedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

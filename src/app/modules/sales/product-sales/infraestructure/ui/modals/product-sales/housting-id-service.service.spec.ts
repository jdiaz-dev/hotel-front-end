import { TestBed } from '@angular/core/testing';

import { HoustingIdServiceService } from './housting-id-service.service';

describe('HoustingIdServiceService', () => {
  let service: HoustingIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoustingIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

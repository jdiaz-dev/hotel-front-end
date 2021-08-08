import { TestBed } from '@angular/core/testing';

import { HoustingService } from './housting.service';

describe('HoustingService', () => {
  let service: HoustingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoustingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

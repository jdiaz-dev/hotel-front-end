import { TestBed } from '@angular/core/testing';

import { OkService } from './ok.service';

describe('OkService', () => {
  let service: OkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

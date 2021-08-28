import { TestBed } from '@angular/core/testing';

import { ReceptionModeService } from './reception-mode.service';

describe('ReceptionModeService', () => {
  let service: ReceptionModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

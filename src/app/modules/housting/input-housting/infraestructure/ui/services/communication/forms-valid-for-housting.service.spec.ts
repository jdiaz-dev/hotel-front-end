import { TestBed } from '@angular/core/testing';

import { FormsValidForHoustingService } from './forms-valid-for-housting.service';

describe('ClientToHoustingService', () => {
  let service: FormsValidForHoustingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsValidForHoustingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

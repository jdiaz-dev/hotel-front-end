import { TestBed } from '@angular/core/testing';

import { HoustingReportService } from './housting-report.service';

describe('HoustingReportService', () => {
  let service: HoustingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoustingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

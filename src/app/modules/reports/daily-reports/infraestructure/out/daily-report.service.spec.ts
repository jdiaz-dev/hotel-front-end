import { TestBed } from '@angular/core/testing';

import { DailyReportService } from './daily-report.service';

describe('DailyReportService', () => {
  let service: DailyReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

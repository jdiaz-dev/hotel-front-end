import { TestBed } from '@angular/core/testing';

import { ChangeReportService } from './change-report.service';

describe('ChangeReportService', () => {
  let service: ChangeReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

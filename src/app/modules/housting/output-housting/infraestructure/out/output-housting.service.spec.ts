import { TestBed } from '@angular/core/testing';

import { OutputHoustingService } from './output-housting.service';

describe('OutputHoustingService', () => {
  let service: OutputHoustingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputHoustingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReloadRoomConditionsService } from './reload-room-conditions.service';

describe('ReloadRoomConditionsService', () => {
  let service: ReloadRoomConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadRoomConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

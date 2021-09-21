import { TestBed } from '@angular/core/testing';

import { ReloadRoomsService } from './reload-rooms.service';

describe('ReloadRoomsService', () => {
  let service: ReloadRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

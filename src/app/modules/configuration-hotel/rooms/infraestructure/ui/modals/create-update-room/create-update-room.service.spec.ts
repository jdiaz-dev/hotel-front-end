import { TestBed } from '@angular/core/testing';

import { CreateUpdateRoomService } from './create-update-room.service';

describe('CreateUpdateRoomService', () => {
  let service: CreateUpdateRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUpdateRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

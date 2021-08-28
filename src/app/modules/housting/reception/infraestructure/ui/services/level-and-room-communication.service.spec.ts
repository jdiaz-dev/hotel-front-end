import { TestBed } from '@angular/core/testing';

import { LevelAndRoomCommunicationService } from './level-and-room-communication.service';

describe('LevelAndRoomCommunicationService', () => {
  let service: LevelAndRoomCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelAndRoomCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

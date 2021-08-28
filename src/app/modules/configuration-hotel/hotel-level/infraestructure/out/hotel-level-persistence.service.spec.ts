import { TestBed } from '@angular/core/testing';

import { HotelLevelPersistenceService } from './hotel-level-persistence.service';

describe('HotelLevelPersistenceService', () => {
  let service: HotelLevelPersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelLevelPersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

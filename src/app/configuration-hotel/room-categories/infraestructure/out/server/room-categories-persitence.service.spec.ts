import { TestBed } from '@angular/core/testing';

import { RoomCategoriesPersitenceService } from './room-categories-persitence.service';

describe('RoomCategoriesPersitenceService', () => {
  let service: RoomCategoriesPersitenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomCategoriesPersitenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClientListService } from './client-list.service';

describe('ClientListService', () => {
  let service: ClientListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

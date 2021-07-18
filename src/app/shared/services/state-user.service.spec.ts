import { TestBed } from '@angular/core/testing';

import { StateUserService } from './state-user.service';

describe('StateUserService', () => {
  let service: StateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

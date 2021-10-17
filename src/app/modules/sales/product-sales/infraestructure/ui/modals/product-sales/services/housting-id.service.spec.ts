import { TestBed } from '@angular/core/testing';

import { HoustingIdService } from './housting-id.service';

describe('HoustingIdService', () => {
    let service: HoustingIdService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HoustingIdService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

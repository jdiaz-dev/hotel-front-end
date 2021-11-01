import { TestBed } from '@angular/core/testing';

import { SearcherService } from './client-list.service';

describe('SearcherService', () => {
    let service: SearcherService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SearcherService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

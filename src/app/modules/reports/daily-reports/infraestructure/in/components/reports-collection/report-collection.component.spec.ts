import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCollectionComponent } from './report-collection.component';

describe('ReportCollectionComponent', () => {
    let component: ReportCollectionComponent;
    let fixture: ComponentFixture<ReportCollectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReportCollectionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

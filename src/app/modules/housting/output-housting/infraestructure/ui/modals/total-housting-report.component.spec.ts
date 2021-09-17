import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalHoustingReportComponent } from './total-housting-report.component';

describe('TotalHoustingReportComponent', () => {
    let component: TotalHoustingReportComponent;
    let fixture: ComponentFixture<TotalHoustingReportComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TotalHoustingReportComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TotalHoustingReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

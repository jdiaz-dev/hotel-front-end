import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishHoustingComponent } from './finish-housting.component';

describe('FinishHoustingComponent', () => {
    let component: FinishHoustingComponent;
    let fixture: ComponentFixture<FinishHoustingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FinishHoustingComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FinishHoustingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

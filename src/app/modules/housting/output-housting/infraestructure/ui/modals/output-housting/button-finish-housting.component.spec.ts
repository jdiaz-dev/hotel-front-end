import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFinishHoustingComponent } from './button-finish-housting.component';

describe('ButtonFinishHoustingComponent', () => {
    let component: ButtonFinishHoustingComponent;
    let fixture: ComponentFixture<ButtonFinishHoustingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonFinishHoustingComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonFinishHoustingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

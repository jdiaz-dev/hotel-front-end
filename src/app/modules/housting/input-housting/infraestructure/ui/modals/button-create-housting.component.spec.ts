import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateHoustingComponent } from './button-create-housting.component';

describe('ButtonCreateHoustingComponent', () => {
    let component: ButtonCreateHoustingComponent;
    let fixture: ComponentFixture<ButtonCreateHoustingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonCreateHoustingComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonCreateHoustingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

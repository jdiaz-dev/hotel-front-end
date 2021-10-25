import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCashComponent } from './form-cash.component';

describe('FormCashComponent', () => {
    let component: FormCashComponent;
    let fixture: ComponentFixture<FormCashComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormCashComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormCashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

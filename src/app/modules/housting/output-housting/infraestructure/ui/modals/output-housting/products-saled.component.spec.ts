import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSaledComponent } from './products-saled.component';

describe('ProductsSaledComponent', () => {
    let component: ProductsSaledComponent;
    let fixture: ComponentFixture<ProductsSaledComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductsSaledComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsSaledComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaledReportComponent } from './product-saled-report.component';

describe('ProductSaledReportComponent', () => {
    let component: ProductSaledReportComponent;
    let fixture: ComponentFixture<ProductSaledReportComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductSaledReportComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductSaledReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

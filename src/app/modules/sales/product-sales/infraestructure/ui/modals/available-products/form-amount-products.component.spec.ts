import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAmountProductsComponent } from './form-amount-products.component';

describe('FormAmountProductsComponent', () => {
  let component: FormAmountProductsComponent;
  let fixture: ComponentFixture<FormAmountProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAmountProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAmountProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

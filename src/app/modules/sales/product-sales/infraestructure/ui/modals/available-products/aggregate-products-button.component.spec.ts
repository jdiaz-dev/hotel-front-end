import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateProductsButtonComponent } from './aggregate-products-button.component';

describe('AggregateProductsButtonComponent', () => {
  let component: AggregateProductsButtonComponent;
  let fixture: ComponentFixture<AggregateProductsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AggregateProductsButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateProductsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSalesContainerComponent } from './product-sales-container.component';

describe('ProductSalesContainerComponent', () => {
  let component: ProductSalesContainerComponent;
  let fixture: ComponentFixture<ProductSalesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSalesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSalesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

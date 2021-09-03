import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddedComponent } from './products-added.component';

describe('ProductsAddedComponent', () => {
  let component: ProductsAddedComponent;
  let fixture: ComponentFixture<ProductsAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

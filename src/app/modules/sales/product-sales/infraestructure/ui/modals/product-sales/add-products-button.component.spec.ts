import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsButtonComponent } from './add-products-button.component';

describe('AddProductsButtonComponent', () => {
  let component: AddProductsButtonComponent;
  let fixture: ComponentFixture<AddProductsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

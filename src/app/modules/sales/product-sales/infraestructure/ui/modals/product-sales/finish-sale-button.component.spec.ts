import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSaleButtonComponent } from './finish-sale-button.component';

describe('FinishSaleButtonComponent', () => {
  let component: FinishSaleButtonComponent;
  let fixture: ComponentFixture<FinishSaleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishSaleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSaleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

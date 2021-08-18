import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashContainerComponent } from './cash-container.component';

describe('CashContainerComponent', () => {
  let component: CashContainerComponent;
  let fixture: ComponentFixture<CashContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashesClosedListComponent } from './cashes-closed-list.component';

describe('CashesClosedListComponent', () => {
  let component: CashesClosedListComponent;
  let fixture: ComponentFixture<CashesClosedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashesClosedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashesClosedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

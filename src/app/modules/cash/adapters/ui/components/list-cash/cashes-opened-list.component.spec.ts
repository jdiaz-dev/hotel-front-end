import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashesOpenedListComponent } from './cashes-opened-list.component';

describe('CashesOpenedListComponent', () => {
  let component: CashesOpenedListComponent;
  let fixture: ComponentFixture<CashesOpenedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashesOpenedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashesOpenedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

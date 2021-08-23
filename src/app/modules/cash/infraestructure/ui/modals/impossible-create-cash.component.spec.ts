import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpossibleCreateCashComponent } from './impossible-create-cash.component';

describe('ImpossibleCreateCashComponent', () => {
  let component: ImpossibleCreateCashComponent;
  let fixture: ComponentFixture<ImpossibleCreateCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpossibleCreateCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpossibleCreateCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCashComponent } from './create-cash.component';

describe('CreateCashComponent', () => {
  let component: CreateCashComponent;
  let fixture: ComponentFixture<CreateCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

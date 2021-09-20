import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLateAppliedComponent } from './input-late-applied.component';

describe('InputLateAppliedComponent', () => {
  let component: InputLateAppliedComponent;
  let fixture: ComponentFixture<InputLateAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLateAppliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLateAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

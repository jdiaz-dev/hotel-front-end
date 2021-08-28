import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputHoustingComponent } from './form-input-housting.component';

describe('FormInputHoustingComponent', () => {
  let component: FormInputHoustingComponent;
  let fixture: ComponentFixture<FormInputHoustingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputHoustingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputHoustingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHoustingComponent } from './form-housting.component';

describe('FormHoustingComponent', () => {
  let component: FormHoustingComponent;
  let fixture: ComponentFixture<FormHoustingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHoustingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHoustingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

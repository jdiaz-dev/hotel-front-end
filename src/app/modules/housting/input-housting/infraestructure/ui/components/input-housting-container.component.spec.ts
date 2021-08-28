import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHoustingContainerComponent } from './input-housting-container.component';

describe('InputHoustingContainerComponent', () => {
  let component: InputHoustingContainerComponent;
  let fixture: ComponentFixture<InputHoustingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputHoustingContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHoustingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

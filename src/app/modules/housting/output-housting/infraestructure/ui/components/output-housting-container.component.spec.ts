import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputHoustingContainerComponent } from './output-housting-container.component';

describe('OutputHoustingContainerComponent', () => {
  let component: OutputHoustingContainerComponent;
  let fixture: ComponentFixture<OutputHoustingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputHoustingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputHoustingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustingContainerComponent } from './housting-container.component';

describe('HoustingContainerComponent', () => {
  let component: HoustingContainerComponent;
  let fixture: ComponentFixture<HoustingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoustingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

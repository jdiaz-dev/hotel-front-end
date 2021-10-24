import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustingReportsComponent } from './housting-reports.component';

describe('HoustingReportsComponent', () => {
  let component: HoustingReportsComponent;
  let fixture: ComponentFixture<HoustingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoustingReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

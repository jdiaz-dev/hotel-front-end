import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustingDataComponent } from './housting-data.component';

describe('HoustingDataComponent', () => {
  let component: HoustingDataComponent;
  let fixture: ComponentFixture<HoustingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoustingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

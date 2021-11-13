import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomConditionsReportComponent } from './room-conditions-report.component';

describe('RoomConditionsReportComponent', () => {
  let component: RoomConditionsReportComponent;
  let fixture: ComponentFixture<RoomConditionsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomConditionsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomConditionsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

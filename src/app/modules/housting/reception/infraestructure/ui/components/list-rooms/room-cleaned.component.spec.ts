import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCleanedComponent } from './room-cleaned.component';

describe('RoomCleanedComponent', () => {
  let component: RoomCleanedComponent;
  let fixture: ComponentFixture<RoomCleanedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCleanedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCleanedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

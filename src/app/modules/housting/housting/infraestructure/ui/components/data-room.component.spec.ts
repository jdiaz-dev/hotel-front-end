import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRoomComponent } from './data-room.component';

describe('DataRoomComponent', () => {
  let component: DataRoomComponent;
  let fixture: ComponentFixture<DataRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

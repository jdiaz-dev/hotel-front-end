import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateRoomComponent } from './create-update-room.component';

describe('CreateUpdateRoomComponent', () => {
  let component: CreateUpdateRoomComponent;
  let fixture: ComponentFixture<CreateUpdateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCategoriesContainerComponent } from './room-categories-container.component';

describe('RoomCategoriesContainerComponent', () => {
  let component: RoomCategoriesContainerComponent;
  let fixture: ComponentFixture<RoomCategoriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCategoriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCategoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

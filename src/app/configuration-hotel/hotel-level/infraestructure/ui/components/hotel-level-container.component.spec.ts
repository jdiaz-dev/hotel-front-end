import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelLevelContainerComponent } from './hotel-level-container.component';

describe('HotelLevelContainerComponent', () => {
  let component: HotelLevelContainerComponent;
  let fixture: ComponentFixture<HotelLevelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelLevelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelLevelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

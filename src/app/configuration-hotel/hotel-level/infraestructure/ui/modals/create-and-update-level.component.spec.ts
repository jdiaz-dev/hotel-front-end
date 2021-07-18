import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUpdateLevelComponent } from './create-and-update-level.component';

describe('CreateAndUpdateLevelComponent', () => {
  let component: CreateAndUpdateLevelComponent;
  let fixture: ComponentFixture<CreateAndUpdateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndUpdateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndUpdateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCollectionComponent } from './level-collection.component';

describe('LevelCollectionComponent', () => {
  let component: LevelCollectionComponent;
  let fixture: ComponentFixture<LevelCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

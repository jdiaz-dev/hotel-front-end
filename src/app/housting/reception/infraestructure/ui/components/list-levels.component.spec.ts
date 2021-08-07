import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLevelsComponent } from './list-levels.component';

describe('ListLevelsComponent', () => {
  let component: ListLevelsComponent;
  let fixture: ComponentFixture<ListLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

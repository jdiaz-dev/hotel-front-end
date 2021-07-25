import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLevelComponent } from './remove-level.component';

describe('RemoveLevelComponent', () => {
  let component: RemoveLevelComponent;
  let fixture: ComponentFixture<RemoveLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHoustingComponent } from './data-housting.component';

describe('DataHoustingComponent', () => {
  let component: DataHoustingComponent;
  let fixture: ComponentFixture<DataHoustingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHoustingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHoustingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

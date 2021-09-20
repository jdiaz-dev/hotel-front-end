import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostHoustingComponent } from './cost-housting.component';

describe('CostHoustingComponent', () => {
  let component: CostHoustingComponent;
  let fixture: ComponentFixture<CostHoustingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostHoustingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostHoustingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

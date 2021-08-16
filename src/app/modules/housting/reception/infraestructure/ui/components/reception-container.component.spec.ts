import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionContainerComponent } from './reception-container.component';

describe('ReceptionContainerComponent', () => {
  let component: ReceptionContainerComponent;
  let fixture: ComponentFixture<ReceptionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

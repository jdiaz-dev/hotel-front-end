import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCollectionComponent } from './client-collection.component';

describe('ClientCollectionComponent', () => {
  let component: ClientCollectionComponent;
  let fixture: ComponentFixture<ClientCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

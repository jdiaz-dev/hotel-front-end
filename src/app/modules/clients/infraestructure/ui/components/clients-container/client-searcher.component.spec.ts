import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearcherComponent } from './client-searcher.component';

describe('ClientSearcherComponent', () => {
  let component: ClientSearcherComponent;
  let fixture: ComponentFixture<ClientSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

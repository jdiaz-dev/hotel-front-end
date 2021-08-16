import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCollectionComponent } from './category-collection.component';

describe('CategoryCollectionComponent', () => {
  let component: CategoryCollectionComponent;
  let fixture: ComponentFixture<CategoryCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

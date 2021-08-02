import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { RoomCategoriesPersitenceService } from './../../../../../room-categories/infraestructure/out/server/room-categories-persitence.service';
import { CategoryData } from './../../../../../room-categories/infraestructure/interfaces/category-data.interface';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  @Input('previousCategory') previousCategory!: CategoryData
  @Output() categorySelected = new EventEmitter<number>();
  categories: CategoryData[] = []
  controlCategorySelected!: FormControl;
  constructor(private readonly roomCategoriesPersitenceService: RoomCategoriesPersitenceService) { }

  ngOnInit(): void {
    this.loadCategories()
    this.checkIfExistsPreviousCategory()
  }
  private checkIfExistsPreviousCategory() {

    if (this.previousCategory) {
      this.controlCategorySelected = new FormControl(this.previousCategory.id, [Validators.required])
      this.sendCategorySelected(this.previousCategory.id)
    } else {
      this.controlCategorySelected = new FormControl('', [Validators.required])
    }

  }

  private loadCategories() {
    this.roomCategoriesPersitenceService.getRoomCategories().subscribe((response: CategoryData[]) => {
      //console.log(response)
      this.categories = response
    })
  }
  sendCategorySelected(levelId: number) {
    this.categorySelected.emit(levelId)
  }

}

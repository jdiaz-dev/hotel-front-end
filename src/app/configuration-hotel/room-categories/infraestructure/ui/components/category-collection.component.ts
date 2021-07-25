import { Component, OnInit } from '@angular/core';
import { CategoryData } from '../../interfaces/category-data.interface';
import { RoomCategoriesPersitenceService } from '../../out/server/room-categories-persitence.service';

@Component({
  selector: 'app-category-collection',
  templateUrl: './category-collection.component.html',
  styleUrls: ['./category-collection.component.scss']
})
export class CategoryCollectionComponent implements OnInit {
  roomCategories: CategoryData[] = []
  displayedColumns: string[] = ['N', 'Category', 'EditButton', 'RemoveButton'];
  constructor(private roomCategoriesPersitenceService: RoomCategoriesPersitenceService) { }

  ngOnInit(): void {
    this.loadRoomCategories()
  }
  loadRoomCategories() {

    this.roomCategoriesPersitenceService.getRoomCategories().subscribe((response: CategoryData[]) => {
      console.log(response)
      this.roomCategories = response
    })
  }
  editCategoryDiaglog(leveldata: CategoryData) {

  }
  removeCategoryDialog(categoryId: number) {

  }

}

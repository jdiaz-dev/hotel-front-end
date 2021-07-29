import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmRemoveComponent } from 'src/app/shared/modals/confirm-remove.component';
import { CustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { CategoryData } from '../../interfaces/category-data.interface';
import { RoomCategoriesPersitenceService } from '../../out/server/room-categories-persitence.service';
import { CreateUpdateCategoryComponent } from '../modals/create-update-category.component';

@Component({
  selector: 'app-category-collection',
  templateUrl: './category-collection.component.html',
  styleUrls: ['./category-collection.component.scss']
})
export class CategoryCollectionComponent implements OnInit {
  roomCategories: CategoryData[] = []
  displayedColumns: string[] = ['N', 'Category', 'Price', 'EditButton', 'RemoveButton'];
  constructor(
    private dialog: MatDialog,
    private roomCategoriesPersitenceService: RoomCategoriesPersitenceService
  ) { }

  ngOnInit(): void {
    this.loadRoomCategories()
  }
  loadRoomCategories() {

    this.roomCategoriesPersitenceService.getRoomCategories().subscribe((response: CategoryData[]) => {
      this.roomCategories = response
    })
  }
  editCategoryDiaglog(categorydata: CategoryData) {
    this.dialog.open(CreateUpdateCategoryComponent, { data: categorydata, width: '40%' })
  }
  removeCategoryDialog(categoryId: number) {
    const toCompleteDialog: CustomMessage = {
      title: 'Eliminar categoría',
      toCompleteDescription: 'esta categoría'
    }
    let dialogRef = this.dialog.open(ConfirmRemoveComponent, { data: toCompleteDialog, width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {

      if (result) {
        this.roomCategoriesPersitenceService.removeRoomCategory(categoryId).subscribe(response => {
        })
      }
    })
  }

}


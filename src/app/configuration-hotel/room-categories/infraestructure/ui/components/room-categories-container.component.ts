import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateCategoryComponent } from '../modals/create-update-category.component';

@Component({
  selector: 'app-room-categories-container',
  templateUrl: './room-categories-container.component.html',
  styleUrls: ['./room-categories-container.component.scss']
})
export class RoomCategoriesContainerComponent {
  reloadCategoryCollectionComponent!: number
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadCategoryCollectionComponent = 0
  }

  openDialog() {
    let dialogRef = this.dialog.open(CreateUpdateCategoryComponent, { width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result)
      if (result) this.reloadCategoryCollectionComponent++
    })
  }
}

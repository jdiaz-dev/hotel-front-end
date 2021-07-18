import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateCategoryComponent } from '../modals/create-update-category/create-update-category.component';

@Component({
  selector: 'app-room-categories-container',
  templateUrl: './room-categories-container.component.html',
  styleUrls: ['./room-categories-container.component.scss']
})
export class RoomCategoriesContainerComponent {

  constructor(
    private dialog:MatDialog
  ) { }

  openDialog(){
    let dialogRef = this.dialog.open(CreateUpdateCategoryComponent, { width:'40%'})
  }

}

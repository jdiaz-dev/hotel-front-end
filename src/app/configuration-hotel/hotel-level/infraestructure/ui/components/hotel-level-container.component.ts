import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAndUpdateLevelComponent } from '../modals/create-and-update-level.component';

@Component({
  selector: 'app-hotel-level-container',
  templateUrl: './hotel-level-container.component.html',
  styleUrls: ['./hotel-level-container.component.scss']
})
export class HotelLevelContainerComponent {

  constructor(
    private dialog:MatDialog
  ) { }

  openDialog(){
    let dialogRef = this.dialog.open(CreateAndUpdateLevelComponent, { width:'40%'})
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAndUpdateLevelComponent } from '../modals/create-and-update-level.component';

@Component({
  selector: 'app-hotel-level-container',
  templateUrl: './hotel-level-container.component.html',
  styleUrls: ['./hotel-level-container.component.scss']
})
export class HotelLevelContainerComponent {
  reloadHotelLevelCollectionComponent!: number
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadHotelLevelCollectionComponent = 0
  }

  openDialog() {
    let dialogRef = this.dialog.open(CreateAndUpdateLevelComponent, { width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.reloadHotelLevelCollectionComponent++
    })
  }

}

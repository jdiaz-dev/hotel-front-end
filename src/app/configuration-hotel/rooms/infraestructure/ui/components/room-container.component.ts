import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateRoomComponent } from '../modals/create-update-room/create-update-room.component';

@Component({
  selector: 'app-room-container',
  templateUrl: './room-container.component.html',
  styleUrls: ['./room-container.component.scss']
})
export class RoomContainerComponent implements OnInit {
  reloadRoomCollectionComponent!: number
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadRoomCollectionComponent = 0
  }
  openDialog() {
    let dialogRef = this.dialog.open(CreateUpdateRoomComponent, { width: '40%' })
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.reloadRoomCollectionComponent++
      }
    })
  }
}

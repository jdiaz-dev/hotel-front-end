import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateRoomComponent } from '../modals/create-update-room.component';

@Component({
  selector: 'app-room-container',
  templateUrl: './room-container.component.html',
  styleUrls: ['./room-container.component.scss']
})
export class RoomContainerComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    let dialogRef = this.dialog.open(CreateUpdateRoomComponent, { width: '40%' })
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';

@Component({
  selector: 'app-housting-container',
  templateUrl: './housting-container.component.html',
  styleUrls: ['./housting-container.component.scss']
})
export class HoustingContainerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RoomData
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}

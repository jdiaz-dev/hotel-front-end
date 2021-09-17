import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';

@Component({
  selector: 'app-output-housting-container',
  templateUrl: './output-housting-container.component.html',
  styleUrls: ['./output-housting-container.component.scss'],
})
export class OutputHoustingContainerComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: RoomData) {}

  ngOnInit(): void {}
}

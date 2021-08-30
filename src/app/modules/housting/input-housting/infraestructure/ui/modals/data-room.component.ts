import { Component, Input, OnInit } from '@angular/core';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';

@Component({
  selector: 'app-data-room',
  templateUrl: './data-room.component.html',
  styleUrls: ['./data-room.component.scss']
})
export class DataRoomComponent implements OnInit {
  @Input('roomData') roomData!: RoomData
  constructor() { }

  ngOnInit(): void { }

}

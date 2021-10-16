import { Component, Input, OnInit } from '@angular/core';
import { RoomData } from '../../../../../../configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { IHoustingResponse } from 'src/app/modules/housting/input-housting/infraestructure/interfaces/housting-response.interface';

@Component({
    selector: 'app-data-housting',
    templateUrl: './data-housting.component.html',
    styleUrls: ['./data-housting.component.scss'],
})
export class DataHoustingComponent implements OnInit {
    @Input('room') room!: RoomData;
    @Input('housting') housting!: IHoustingResponse;

    constructor() {}

    ngOnInit(): void {}
}

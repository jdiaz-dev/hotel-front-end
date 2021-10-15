import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { RoomData } from '../../interfaces/room.data';
import { RoomsPersistenceService } from '../../out/rooms.service';
import { CreateUpdateRoomComponent } from '../modals/create-update-room/create-update-room.component';

@Component({
    selector: 'app-room-collection',
    templateUrl: './room-collection.component.html',
    styleUrls: ['./room-collection.component.scss'],
})
export class RoomCollectionComponent implements OnInit, OnChanges {
    @Input('reload') reloadThisComponent!: number;
    rooms!: RoomData[];
    displayedColumns: string[] = ['N', 'Name', 'Category', 'Price', 'Details', 'EditButton', 'RemoveButton'];
    constructor(private dialog: MatDialog, private readonly roomsPersistenceService: RoomsPersistenceService) {}
    ngOnChanges() {
        if (this.reloadThisComponent) this.loadRooms();
    }
    ngOnInit(): void {
        this.loadRooms();
    }
    loadRooms() {
        this.roomsPersistenceService.getALLRooms().subscribe((response: RoomData[]) => {
            // console.log(response);
            this.rooms = response;
        });
    }
    editRoomDialog(categorydata: RoomData) {
        let dialogRef = this.dialog.open(CreateUpdateRoomComponent, { data: categorydata, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.loadRooms();
            }
        });
    }
    removeRoomDialog(room: RoomData) {
        const toCompleteDialog: ICustomMessage = {
            title: 'Eliminar habitación',
            toCompleteDescription: 'eliminar esta habitación',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.roomsPersistenceService.removeRoom(room.level.id, room.id).subscribe((response) => {
                    if (response) this.loadRooms();
                });
            }
        });
    }
}

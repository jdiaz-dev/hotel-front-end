import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmRemoveComponent } from 'src/app/shared/modals/confirm-remove.component';
import { CustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { RoomData } from '../../interfaces/room.data';
import { RoomsPersistenceService } from '../../out/server/rooms.service';
import { CreateUpdateRoomComponent } from '../modals/create-update-room/create-update-room.component';

@Component({
  selector: 'app-room-collection',
  templateUrl: './room-collection.component.html',
  styleUrls: ['./room-collection.component.scss']
})
export class RoomCollectionComponent implements OnInit {
  rooms: RoomData[] = []
  displayedColumns: string[] = ['N', 'Name', 'Category', 'Price', 'Details', 'EditButton', 'RemoveButton'];
  constructor(
    private dialog: MatDialog,
    private readonly roomsPersistenceService: RoomsPersistenceService
  ) { }

  ngOnInit(): void {
    this.loadRooms()
  }
  loadRooms() {
    this.roomsPersistenceService.getALLRooms().subscribe((response: RoomData[]) => {
      console.log(response)
      this.rooms = response
    })
  }
  editRoomDialog(categorydata: RoomData) {
    this.dialog.open(CreateUpdateRoomComponent, { data: categorydata, width: '40%' })
  }
  removeRoomDialog(room: RoomData) {
    const toCompleteDialog: CustomMessage = {
      title: 'Eliminar habitación',
      toCompleteDescription: 'esta habitación'
    }
    let dialogRef = this.dialog.open(ConfirmRemoveComponent, { data: toCompleteDialog, width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {

      if (result) {
        this.roomsPersistenceService.removeRoom(room.level.id, room.id).subscribe(response => {
          console.log(response)
        })
      }
    })
  }

}

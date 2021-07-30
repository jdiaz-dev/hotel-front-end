import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HotelLevelPersistenceService } from 'src/app/configuration-hotel/hotel-level/infraestructure/out/server/hotel-level-persistence.service';
import { RoomData } from '../../../interfaces/room.data';
import { RoomsPersistenceService } from '../../../out/server/rooms.service';
import { RoomModel } from '../../models/room.model';

@Component({
  selector: 'app-create-update-room',
  templateUrl: './create-update-room.component.html',
  styleUrls: ['./create-update-room.component.scss'],
})
export class CreateUpdateRoomComponent implements OnInit {

  action: string = 'create'
  roomData!: FormGroup
  room: RoomModel = new RoomModel('', null, '', null, null)
  levelId: number = NaN
  categoryId: number = NaN
  roomId: number = NaN

  constructor(
    private roomsPersistenceService: RoomsPersistenceService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: RoomData
  ) { }

  ngOnInit(): void {
    this.paramsToUpdateLevel()

    this.roomData = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.max(999)]],
      details: ['', [Validators.required, Validators.maxLength(200)]],
      levelId: ['', [Validators.required, Validators.max(20)]],
      categoryId: ['', [Validators.required, Validators.max(20)]]
    })
  }
  paramsToUpdateLevel() {
    this.room = this.data !== null ? new RoomModel(this.data.name, this.data.price, this.data.details, null, null) : this.room
    this.levelId = this.data !== null ? this.data.level.id : this.roomId
    this.categoryId = this.data !== null ? this.data.category.id : this.roomId
    this.roomId = this.data !== null ? this.data.id : this.roomId
    this.action = this.data !== null ? 'update' : this.action
  }
  saveRoom(form: any) {
    const data = new RoomModel(
      this.roomData.value.name,
      this.roomData.value.price,
      this.roomData.value.details,
      this.roomData.value.levelId,
      this.roomData.value.categoryId,
    )

    if (this.action === 'create') {
      this.createRoom(data)
    } else if (this.action === 'update') {
      this.updateRoom(data)
    }
  }
  createRoom(data: RoomModel) {
    this.roomsPersistenceService.createRoom(data).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  updateRoom(data: RoomModel) {
    this.roomsPersistenceService.updateRoom(data, this.levelId, this.categoryId, this.roomId).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  get roomControl() {
    return this.roomData.controls
  }
  addlevelSelected(levelId: number) {
    this.roomData.value.levelId = levelId
    console.log(this.roomData.value)
  }
}

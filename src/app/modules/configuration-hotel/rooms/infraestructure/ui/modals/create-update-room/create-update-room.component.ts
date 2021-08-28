import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { RoomData } from '../../../interfaces/room.data';
import { RoomsPersistenceService } from '../../../out/rooms.service';
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
      name: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      price: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
      details: ['', [
        Validators.required,
        Validators.maxLength(200),
        Validators.pattern(REG_EXP.alphanumeric)]],
      levelId: ['', [Validators.required]],
      categoryId: ['', [Validators.required]]
    })
  }
  private paramsToUpdateLevel() {
    this.room = this.data !== null ? new RoomModel(this.data.name, this.data.price, this.data.details, this.data.level.id, this.data.category.id) : this.room

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

  addlevelSelected(levelId: any) {
    this.roomData.get('levelId')?.setValue(levelId)
  }
  addCategorySelected(categoryId: number) {
    this.roomData.get('categoryId')?.setValue(categoryId)
  }
  get roomControl() {
    return this.roomData.controls
  }
  private createRoom(data: RoomModel) {
    this.roomsPersistenceService.createRoom(data).subscribe((response: any) => {
      console.log(response)
      this.ngOnInit()
    }, (error) => {
      console.log(error)
    })
  }
  private updateRoom(data: RoomModel) {
    this.roomsPersistenceService.updateRoom(data, this.levelId, this.categoryId, this.roomId).subscribe((response: any) => {
      console.log(response)
      this.ngOnInit()
    }, (error) => {
      console.log(error)
    })
  }
}

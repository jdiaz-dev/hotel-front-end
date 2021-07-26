import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { LevelData } from '../../interfaces/level-data.interface';
import { LevelModel } from '../models/level.model';
import { HotelLevelPersistenceService } from './../../out/server/hotel-level-persistence.service';


@Component({
  selector: 'app-create-and-update-level',
  templateUrl: './create-and-update-level.component.html',
  styleUrls: ['./create-and-update-level.component.scss']
})
export class CreateAndUpdateLevelComponent implements OnInit {
  action: string = 'create'
  hotelLevelData!: FormGroup
  level: LevelModel = new LevelModel(null, '')
  levelId: number = NaN

  constructor(
    private hotelLevelPersistence: HotelLevelPersistenceService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: LevelData
  ) { }

  ngOnInit(): void {
    this.paramsToUpdateLevel()

    this.hotelLevelData = this.formBuilder.group({
      numberLevel: ['', [Validators.required, Validators.max(999), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      nameLevel: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }
  paramsToUpdateLevel() {
    this.level = this.data !== null ? new LevelModel(this.data.number, this.data.name) : this.level
    this.levelId = this.data !== null ? this.data.id : this.levelId
    this.action = this.data !== null ? 'update' : this.action
  }
  saveHotelLevel(form: any) {
    const data = new LevelModel(this.hotelLevelData.value.numberLevel, this.hotelLevelData.value.nameLevel)

    if (this.action === 'create') {
      this.createLevel(data)
    } else if (this.action === 'update') {
      this.updateLevel(data)
    }
  }
  createLevel(data: LevelModel) {
    this.hotelLevelPersistence.createHotelLevel(data).subscribe((response: any) => {

    }, (error) => {
      console.log(error)
    })
  }
  updateLevel(data: LevelModel) {
    this.hotelLevelPersistence.updateHotelLevel(data, this.levelId).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  get hotelLevelControl() {
    return this.hotelLevelData.controls
  }
}

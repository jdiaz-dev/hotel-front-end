import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HotelLevelModel } from '../models/hotel-level.mode';
import { HotelLevelPersistenceService } from './../../out/server/hotel-level-persistence.service';


@Component({
  selector: 'app-create-and-update-level',
  templateUrl: './create-and-update-level.component.html',
  styleUrls: ['./create-and-update-level.component.scss']
})
export class CreateAndUpdateLevelComponent implements OnInit {
  action: string = 'create'
  hotelLevelData!: FormGroup
  hotelLevel: HotelLevelModel = new HotelLevelModel('')

  constructor(
    private hotelLevelPersistence: HotelLevelPersistenceService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.hotelLevelData = this.formBuilder.group({
      nameLevel: ['', Validators.required],
    })
  }
  saveHotelLevel(form: any) {
    const data = new HotelLevelModel(this.hotelLevelData.value.nameLevel)

    if (this.action === 'create') {
      this.createOpener(data)
    } else if (this.action === 'update') {
      this.updateOpener(data)
    }
  }
  createOpener(data: HotelLevelModel) {
    this.hotelLevelPersistence.createHotelLevel(data).subscribe((response: any) => {

    }, (error) => {
      console.log(error)
    })
  }
  updateOpener(data: HotelLevelModel) {
    this.hotelLevelPersistence.updateHotelLevel(data, 99999999999999999999).subscribe((response: any) => {

    }, (error) => {
      console.log(error)
    })
  }
  get hotelLevelControl() {
    return this.hotelLevelData.controls
  }
}

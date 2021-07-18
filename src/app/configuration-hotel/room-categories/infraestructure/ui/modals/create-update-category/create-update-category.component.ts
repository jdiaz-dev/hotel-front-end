import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RoomCategoryModel } from '../../models/room-category.model';
import { RoomCategoriesPersitenceService } from './../../../out/server/room-categories-persitence.service';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {
  action:string = 'create'
  roomCategoryData!:FormGroup
  roomCategory:RoomCategoryModel = new RoomCategoryModel('')
  
  constructor(
    private roomCategoriesPersitence:RoomCategoriesPersitenceService,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.roomCategoryData = this.formBuilder.group({
      nameCategory:['', Validators.required],
    })
  }
  saveHotelLevel(form:any){
    const data = new RoomCategoryModel(this.roomCategoryData.value.nameCategory)

    if(this.action === 'create'){
      this.createOpener(data)
    }else if(this.action === 'update'){
      this.updateOpener(data)
    }
  }
  createOpener(data:RoomCategoryModel){
    this.roomCategoriesPersitence.createRoomCategory(data).subscribe( (response:any) => {
       
    }, (error) => {
      console.log(error)
    })
  }
  updateOpener(data:RoomCategoryModel){
    this.roomCategoriesPersitence.updateRoomCategory(data, 999999).subscribe( (response:any) => {

    }, (error) => {
      console.log(error)
    })
  }
  get roomCategoryControl(){
    return this.roomCategoryData.controls
  }

}

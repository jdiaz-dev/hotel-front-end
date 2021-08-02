import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RoomCategoryModel } from '../models/room-category.model';
import { RoomCategoriesPersitenceService } from '../../out/server/room-categories-persitence.service';
import { CategoryData } from './../../interfaces/category-data.interface';
import { REG_EXP } from './../../../../../shared/consts/reg-exp.enum';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {
  action: string = 'create'
  roomCategoryData!: FormGroup
  roomCategory: RoomCategoryModel = new RoomCategoryModel('', null)
  categoryId: number = NaN

  constructor(
    private roomCategoriesPersitence: RoomCategoriesPersitenceService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: CategoryData
  ) { }

  ngOnInit(): void {
    this.paramsToUpdateCategory()

    this.roomCategoryData = this.formBuilder.group({
      nameCategory: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(REG_EXP.alphanumeric)]],
      price: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(REG_EXP.numeric)]],
    })
    this.roomCategoryControl

  }
  paramsToUpdateCategory() {
    this.roomCategory = this.data !== null ? new RoomCategoryModel(this.data.category, this.data.price
    ) : this.roomCategory
    this.categoryId = this.data !== null ? this.data.id : this.categoryId
    this.action = this.data !== null ? 'update' : this.action
  }
  saveHotelLevel(form: any) {
    const data = new RoomCategoryModel(
      this.roomCategoryData.value.nameCategory,
      this.roomCategoryData.value.price
    )

    if (this.action === 'create') {
      this.createOpener(data)
    } else if (this.action === 'update') {
      this.updateOpener(data)
    }
  }
  createOpener(data: RoomCategoryModel) {
    this.roomCategoriesPersitence.createRoomCategory(data).subscribe((response: any) => {
      //console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  updateOpener(data: RoomCategoryModel) {
    this.roomCategoriesPersitence.updateRoomCategory(data, this.categoryId).subscribe((response: any) => {
      //console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  get roomCategoryControl() {
    console.log(this.roomCategoryData.controls)
    return this.roomCategoryData.controls
  }

}

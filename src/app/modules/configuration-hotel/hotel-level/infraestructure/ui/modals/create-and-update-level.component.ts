import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LevelData } from '../../interfaces/level-data.interface';
import { LevelModel } from '../models/level.model';
import { HotelLevelPersistenceService } from '../../out/hotel-level-persistence.service';
import { REG_EXP } from '../../../../../../shared/consts/reg-exp.enum';

@Component({
    selector: 'app-create-and-update-level',
    templateUrl: './create-and-update-level.component.html',
    styleUrls: ['./create-and-update-level.component.scss'],
})
export class CreateAndUpdateLevelComponent implements OnInit {
    action: string = 'create';
    hotelLevelData!: FormGroup;
    level: LevelModel = new LevelModel(null, '');
    levelId: number = NaN;

    constructor(
        private hotelLevelPersistence: HotelLevelPersistenceService,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: LevelData,
    ) {}

    ngOnInit(): void {
        this.paramsToUpdateLevel();

        this.hotelLevelData = this.formBuilder.group({
            numberLevel: ['', [Validators.required, Validators.maxLength(3), Validators.pattern(REG_EXP.numeric)]],
            nameLevel: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(REG_EXP.alphanumeric)]],
        });
    }
    paramsToUpdateLevel() {
        this.level = this.data !== null ? new LevelModel(this.data.number, this.data.name) : this.level;
        this.levelId = this.data !== null ? this.data.id : this.levelId;
        this.action = this.data !== null ? 'update' : this.action;
    }
    saveHotelLevel(form: any) {
        const data = new LevelModel(this.hotelLevelData.value.numberLevel, this.hotelLevelData.value.nameLevel);
        if (this.action === 'create') {
            this.createLevel(data);
        } else if (this.action === 'update') {
            this.updateLevel(data);
        }
    }
    createLevel(data: LevelModel) {
        this.hotelLevelPersistence.createHotelLevel(data).subscribe(
            (response) => {
                // console.log('--------------creating level', response);
            },
            (error) => {
                console.log('--------------creating level error', error);
            },
        );
    }
    updateLevel(data: LevelModel) {
        this.hotelLevelPersistence.updateHotelLevel(data, this.levelId).subscribe(
            (response: any) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            },
        );
    }
    get hotelLevelControl() {
        return this.hotelLevelData.controls;
    }
}
//software.athvio.com

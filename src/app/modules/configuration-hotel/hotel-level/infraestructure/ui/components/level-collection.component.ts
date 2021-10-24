import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HotelLevelPersistenceService } from '../../out/hotel-level-persistence.service';
import { ILevelsDataResponse, LevelData } from '../../interfaces/level-data.interface';
import { CreateAndUpdateLevelComponent } from '../modals/create-and-update-level.component';
import { ConfirmComponent } from 'src/app/shared/modals/confirm-remove.component';
import { ICustomMessage } from 'src/app/shared/modals/custom-message.interface';
import { BasePaginator } from 'src/app/shared/components/paginator/base-paginator';
import { IQueries } from 'src/app/shared/interfaces/queries/queries.interface';

@Component({
    selector: 'app-level-collection',
    templateUrl: './level-collection.component.html',
    styleUrls: ['./level-collection.component.scss'],
})
export class LevelCollectionComponent extends BasePaginator implements OnInit, OnChanges {
    @Input('reload') reloadThisComponent!: number;
    hotelLevels: LevelData[] = [];
    displayedColumns: string[] = ['Level', 'Name', 'EditButton', 'RemoveButton'];
    totalLevels!: number;

    constructor(private dialog: MatDialog, private hotelLevelPersistenceService: HotelLevelPersistenceService) {
        super();
    }
    ngOnChanges() {
        if (this.reloadThisComponent) this.loadHotelLevels();
    }
    ngOnInit(): void {
        this.loadHotelLevels();
    }
    loadHotelLevels(offset?: number) {
        let queries: IQueries = {
            limit: 5,
            offset: offset ? offset : 0,
        };
        this.hotelLevelPersistenceService.getHotelLevels(queries).subscribe((response: ILevelsDataResponse) => {
            console.log('--------------levels', response);
            this.totalLevels = response.count;
            this.hotelLevels = response.rows;
        });
    }
    editLevelDiaglog(leveldata: LevelData) {
        let dialogRef = this.dialog.open(CreateAndUpdateLevelComponent, { data: leveldata, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) this.loadHotelLevels();
        });
    }
    removeLevelDialog(levelId: number) {
        const toCompleteDialog: ICustomMessage = {
            title: 'Eliminar nivel',
            toCompleteDescription: 'eliminar esta categoría',
        };
        let dialogRef = this.dialog.open(ConfirmComponent, { data: toCompleteDialog, width: '40%' });
        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.hotelLevelPersistenceService.removeLevel(levelId).subscribe((response) => {
                    if (response) this.loadHotelLevels();
                });
            }
        });
    }
    loadNextLevels(offset: number) {
        this.loadHotelLevels(offset);
    }
}

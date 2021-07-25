import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HotelLevelPersistenceService } from '../../out/server/hotel-level-persistence.service';
import { LevelData } from '../../interfaces/level-data.interface';
import { CreateAndUpdateLevelComponent } from '../modals/create-and-update-level.component';
import { RemoveLevelComponent } from '../modals/remove-level.component';
import { LevelModel } from '../models/level.model';

@Component({
  selector: 'app-level-collection',
  templateUrl: './level-collection.component.html',
  styleUrls: ['./level-collection.component.scss']
})
export class LevelCollectionComponent implements OnInit {
  hotelLevels: LevelData[] = []
  displayedColumns: string[] = ['Level', 'Name', 'EditButton', 'RemoveButton'];

  constructor(
    private dialog: MatDialog,
    private hotelLevelPersistenceService: HotelLevelPersistenceService
  ) { }

  ngOnInit(): void {
    this.loadHotelLevels()
  }
  loadHotelLevels() {
    this.hotelLevelPersistenceService.getHotelLevels().subscribe((response: LevelData[]) => {

      this.hotelLevels = response
    })
  }
  removeLevelDialog(levelId: number) {
    let dialogRef = this.dialog.open(RemoveLevelComponent, { width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {

      if (result) {
        this.hotelLevelPersistenceService.removeLevel(levelId).subscribe(response => {
        })
      }
    })
  }
  editLevelDiaglog(leveldata: LevelData) {
    //const data = new LevelModel(dataLevel.number, dataLevel.name)
    this.dialog.open(CreateAndUpdateLevelComponent, { data: leveldata, width: '40%' })
  }
}

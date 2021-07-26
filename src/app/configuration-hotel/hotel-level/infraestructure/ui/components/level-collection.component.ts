import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HotelLevelPersistenceService } from '../../out/server/hotel-level-persistence.service';
import { LevelData } from '../../interfaces/level-data.interface';
import { CreateAndUpdateLevelComponent } from '../modals/create-and-update-level.component';
import { ConfirmRemoveComponent } from 'src/app/shared/modals/confirm-remove.component';
import { CustomMessage } from 'src/app/shared/modals/custom-message.interface';

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
  editLevelDiaglog(leveldata: LevelData) {
    this.dialog.open(CreateAndUpdateLevelComponent, { data: leveldata, width: '40%' })
  }
  removeLevelDialog(levelId: number) {
    const toCompleteDialog: CustomMessage = {
      title: 'Eliminar nivel',
      toCompleteDescription: 'esta categoría'
    }
    let dialogRef = this.dialog.open(ConfirmRemoveComponent, { data: toCompleteDialog, width: '40%' })
    dialogRef.afterClosed().subscribe((result: boolean) => {

      if (result) {
        this.hotelLevelPersistenceService.removeLevel(levelId).subscribe(response => {
        })
      }
    })
  }


}

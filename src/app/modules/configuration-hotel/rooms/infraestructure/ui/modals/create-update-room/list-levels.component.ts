import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelLevelPersistenceService } from '../../../../../hotel-level/infraestructure/out/server/hotel-level-persistence.service';
import { LevelData } from '../../../../../hotel-level/infraestructure/interfaces/level-data.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-levels',
  templateUrl: './list-levels.component.html',
  styleUrls: ['./list-levels.component.scss']
})
export class ListLevelsComponent implements OnInit {
  @Input('previousLevel') previousLevel!: LevelData;
  @Output() levelSelected = new EventEmitter<number>();

  levels: LevelData[] = []
  controlLevelSelected!: FormControl
  constructor(
    private readonly hotelLevelPersistenceService: HotelLevelPersistenceService,
  ) { }

  ngOnInit(): void {
    this.loadLevels()
    this.checkIfExistsPreviousLevel()
  }
  private checkIfExistsPreviousLevel() {
    if (this.previousLevel) {
      this.controlLevelSelected = new FormControl(this.previousLevel.id, [Validators.required]);
      this.sendLevelSelected(this.previousLevel.id)
    } else {
      this.controlLevelSelected = new FormControl('', [Validators.required]);
    }
  }
  private loadLevels() {
    this.hotelLevelPersistenceService.getHotelLevels().subscribe((response: LevelData[]) => {
      //console.log(response)
      this.levels = response
    })
  }
  sendLevelSelected(levelId: number) {
    this.levelSelected.emit(levelId)
  }

}

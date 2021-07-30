import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelLevelPersistenceService } from './../../../../../hotel-level/infraestructure/out/server/hotel-level-persistence.service';
import { LevelData } from './../../../../../hotel-level/infraestructure/interfaces/level-data.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-levels',
  templateUrl: './list-levels.component.html',
  styleUrls: ['./list-levels.component.scss']
})
export class ListLevelsComponent implements OnInit {
  //@Input() name: string;
  @Output() levelSelected = new EventEmitter<number>();

  levels: LevelData[] = []
  controlLevelSelected = new FormControl('', [Validators.required]);
  constructor(
    private readonly hotelLevelPersistenceService: HotelLevelPersistenceService,
  ) { }

  ngOnInit(): void {
    this.loadLevels()
    console.log(this.controlLevelSelected.errors)
  }
  loadLevels() {
    this.hotelLevelPersistenceService.getHotelLevels().subscribe((response: LevelData[]) => {
      console.log(response)
      this.levels = response
    })
  }
  sendSelected(levelId: number) {
    console.log(this.controlLevelSelected.errors)
    this.levelSelected.emit(levelId)
  }

}

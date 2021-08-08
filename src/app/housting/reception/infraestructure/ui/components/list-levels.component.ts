import { Component, OnInit } from '@angular/core';
import { LevelData } from 'src/app/configuration-hotel/hotel-level/infraestructure/interfaces/level-data.interface';
import { HotelLevelPersistenceService } from 'src/app/configuration-hotel/hotel-level/infraestructure/out/server/hotel-level-persistence.service';
import { GetLevelsForReceptionDomain } from '../../../application/ports/out/other-domains/get-levels-for-reception-domain.port';

@Component({
  selector: 'app-list-levels',
  templateUrl: './list-levels.component.html',
  styleUrls: ['./list-levels.component.scss']
})
export class ListLevelsComponent implements OnInit {
  private getLevelsForReceptionDomain: GetLevelsForReceptionDomain
  hotelLevels: LevelData[] = []

  constructor(private readonly hotelLevelPersistenceService: HotelLevelPersistenceService) {
    this.getLevelsForReceptionDomain = hotelLevelPersistenceService
  }

  ngOnInit(): void {
    this.loadHotelLevels()
  }
  loadHotelLevels() {
    this.getLevelsForReceptionDomain.getHotelLevels().subscribe((response: LevelData[]) => {
      this.hotelLevels = response
    })
  }

}

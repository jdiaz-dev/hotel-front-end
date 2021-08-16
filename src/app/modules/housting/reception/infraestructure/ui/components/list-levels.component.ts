import { Component, OnInit } from '@angular/core';
import { LevelData } from 'src/app/modules/configuration-hotel/hotel-level/infraestructure/interfaces/level-data.interface';
import { HotelLevelPersistenceService } from 'src/app/modules/configuration-hotel/hotel-level/infraestructure/out/server/hotel-level-persistence.service';
import { GetLevelsForReceptionDomain } from '../../../application/ports/out/other-domains/get-levels-for-reception-domain.port';
import { LevelAndRoomCommunicationService } from '../../services/level-and-room-communication.service';

@Component({
  selector: 'app-list-levels',
  templateUrl: './list-levels.component.html',
  styleUrls: ['./list-levels.component.scss']
})
export class ListLevelsComponent implements OnInit {
  private getLevelsForReceptionDomain: GetLevelsForReceptionDomain
  hotelLevels: LevelData[] = []
  activeLink!: string

  constructor(
    private levelAndRoomCommunicationService: LevelAndRoomCommunicationService,
    hotelLevelPersistenceService: HotelLevelPersistenceService
  ) {
    this.getLevelsForReceptionDomain = hotelLevelPersistenceService
  }
  ngOnInit(): void {
    this.loadHotelLevels()
  }
  loadHotelLevels() {
    this.getLevelsForReceptionDomain.getHotelLevels().subscribe((response: LevelData[]) => {
      this.hotelLevels = response
      this.activeLink = this.hotelLevels[0].name;
      this.changeRoomsOfLevel(this.hotelLevels[0].id)
    })
  }
  changeRoomsOfLevel(levelId: number) {
    this.levelAndRoomCommunicationService.renderOtherRooms(levelId)
  }
}

import { Component, OnInit } from '@angular/core';
import { HotelLevelPersistenceService } from '../../out/server/hotel-level-persistence.service';

@Component({
  selector: 'app-level-collection',
  templateUrl: './level-collection.component.html',
  styleUrls: ['./level-collection.component.scss']
})
export class LevelCollectionComponent implements OnInit {
  hotelLevels: any[] = []

  constructor(private hotelLevelPersistenceService: HotelLevelPersistenceService) { }

  ngOnInit(): void {
    this.loadHotelLevels()
  }
  loadHotelLevels() {
    this.hotelLevelPersistenceService.getHotelLevels().subscribe((response: any) => {
      console.log(response)
      this.hotelLevels = response
    })
  }
}

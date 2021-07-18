import { Component, OnInit } from '@angular/core';
import { RoomCategoriesPersitenceService } from '../../out/server/room-categories-persitence.service';

@Component({
  selector: 'app-category-collection',
  templateUrl: './category-collection.component.html',
  styleUrls: ['./category-collection.component.scss']
})
export class CategoryCollectionComponent implements OnInit {
  roomCategories: any[] = []
  constructor(private roomCategoriesPersitenceService: RoomCategoriesPersitenceService) { }

  ngOnInit(): void {
    this.loadRoomCategories()
  }
  loadRoomCategories() {
    const mockCategories = [
      'categoria 1',
      'categoria 1',
      'categoria 1',
      'categoria 1',
    ]
    this.roomCategories = mockCategories
    /* this.roomCategoriesPersitenceService.getRoomCategories().subscribe( (response:any) => {
      this.roomCategories = response
    }) */
  }

}

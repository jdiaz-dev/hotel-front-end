import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';

@Component({
  selector: 'app-product-sales-container',
  templateUrl: './product-sales-container.component.html',
  styleUrls: ['./product-sales-container.component.scss']
})
export class ProductSalesContainerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public roomId: number
  ) { }

  ngOnInit(): void {

  }

}

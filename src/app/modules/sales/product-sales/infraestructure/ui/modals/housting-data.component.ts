import { Component, Input, OnInit } from '@angular/core';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { GetHoustingForProductSalesDomain } from '../../../application/ports/out/other-domains/get-housting-for-product-sales-domain.port';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { IhoustingData } from '../../interfaces/housting-data.interface';

@Component({
  selector: 'app-housting-data',
  templateUrl: './housting-data.component.html',
  styleUrls: ['./housting-data.component.scss']
})
export class HoustingDataComponent implements OnInit {
  @Input('room') room!: RoomData
  private getHoustingForProductSalesDomain: GetHoustingForProductSalesDomain
  houstingData!: IhoustingData

  constructor(
    houstingService: HoustingService
  ) {
    this.getHoustingForProductSalesDomain = houstingService
  }

  ngOnInit(): void {
    this.loadCurrentHousting()
  }
  loadCurrentHousting() {
    this.getHoustingForProductSalesDomain.getHousting(this.room.id).subscribe(response => {
      console.log(response)
      this.houstingData = response
    })

  }

}

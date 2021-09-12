import { Component, Input, OnInit } from '@angular/core';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';

import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { GetHoustingForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-housting-for-product-sales-domain.port';
import { IhoustingData } from '../../../interfaces/housting-data.interface';
import { HoustingIdServiceService } from './housting-id-service.service';

@Component({
  selector: 'app-housting-data',
  templateUrl: './housting-data.component.html',
  styleUrls: ['./housting-data.component.scss'],
})
export class HoustingDataComponent implements OnInit {
  @Input('room') room!: RoomData;
  private getHoustingForProductSalesDomainPort: GetHoustingForProductSalesDomainPort;
  houstingData!: IhoustingData;

  constructor(private houstingIdServiceService: HoustingIdServiceService, houstingService: HoustingService) {
    this.getHoustingForProductSalesDomainPort = houstingService;
  }

  ngOnInit(): void {
    this.loadCurrentHousting();
  }
  loadCurrentHousting() {
    this.getHoustingForProductSalesDomainPort.getHousting(this.room.id).subscribe((response) => {
      // console.log(response);
      this.houstingData = response;

      this.houstingIdServiceService.sendProductId(this.houstingData.id);
    });
  }
}

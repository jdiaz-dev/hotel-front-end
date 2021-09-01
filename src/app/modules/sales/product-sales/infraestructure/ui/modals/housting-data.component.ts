import { Component, Input, OnInit } from '@angular/core';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { GetHoustingForProductSalesDomain } from '../../../application/ports/out/other-domains/get-housting-for-product-sales-domain.port';

@Component({
  selector: 'app-housting-data',
  templateUrl: './housting-data.component.html',
  styleUrls: ['./housting-data.component.scss']
})
export class HoustingDataComponent implements OnInit {
  @Input('roomId') roomId!: number
  private getHoustingForProductSalesDomain: GetHoustingForProductSalesDomain
  constructor(
    houstingService: HoustingService
  ) {
    this.getHoustingForProductSalesDomain = houstingService
  }

  ngOnInit(): void {
  }
  loadCurrentHousting() {
    this.getHoustingForProductSalesDomain.getHousting(this.roomId).subscribe(response => {
      console.log(response)
    })

  }

}

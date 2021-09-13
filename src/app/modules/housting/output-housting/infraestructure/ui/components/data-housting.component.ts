import { Component, Input, OnInit } from '@angular/core';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { OutputHoustingService } from '../../out/output-housting.service';
import { GetHoustingForOutputHoustingDomainPort } from './../../../application/ports/out/other-domain/get-housting-for-output-housting-domain.port';
import { RoomData } from './../../../../../configuration-hotel/rooms/infraestructure/interfaces/room.data';

@Component({
  selector: 'app-data-housting',
  templateUrl: './data-housting.component.html',
  styleUrls: ['./data-housting.component.scss'],
})
export class DataHoustingComponent implements OnInit {
  @Input('room') room!: RoomData;
  private getHoustingForOutputHoustingDomainPort: GetHoustingForOutputHoustingDomainPort;

  constructor(private outputHoustingService: OutputHoustingService, houstingService: HoustingService) {
    this.getHoustingForOutputHoustingDomainPort = houstingService;
  }

  ngOnInit(): void {
    this.getReportOutputHousting();
  }
  getReportOutputHousting() {
    this.getHoustingForOutputHoustingDomainPort.getHousting(this.room.id).subscribe((response: any) => {
      console.log(response);
      this.outputHoustingService.getHoustingReport(response.id).subscribe((response2: any) => {
        console.log(response2);
      });
    });
  }
}

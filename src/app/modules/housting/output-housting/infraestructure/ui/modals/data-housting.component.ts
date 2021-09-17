import { Component, Input, OnInit } from '@angular/core';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { OutputHoustingService } from '../../out/output-housting.service';
import { GetHoustingForOutputHoustingDomainPort } from '../../../application/ports/out/other-domain/get-housting-for-output-housting-domain.port';
import { RoomData } from '../../../../../configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { IHoustingResponse } from 'src/app/modules/housting/input-housting/infraestructure/interfaces/housting-response.interface';

@Component({
    selector: 'app-data-housting',
    templateUrl: './data-housting.component.html',
    styleUrls: ['./data-housting.component.scss'],
})
export class DataHoustingComponent implements OnInit {
    @Input('room') room!: RoomData;
    private getHoustingForOutputHoustingDomainPort: GetHoustingForOutputHoustingDomainPort;
    columnsHousting: string[] = ['TotalPrice', 'MoneyPaid', 'LateApplied', 'CompletePayment'];
    housting!: IHoustingResponse[];

    constructor(private outputHoustingService: OutputHoustingService, houstingService: HoustingService) {
        this.getHoustingForOutputHoustingDomainPort = houstingService;
    }

    ngOnInit(): void {
        this.getReportOutputHousting();
    }
    getReportOutputHousting() {
        this.getHoustingForOutputHoustingDomainPort
            .getHousting(this.room.id)
            .subscribe((response: IHoustingResponse) => {
                console.log(response);
                this.housting = [response]; //converting to array to help in ui
            });
    }
}

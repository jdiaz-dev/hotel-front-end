import { Component, OnInit } from '@angular/core';
import { IRoomConditionsReport } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room-conditions-report';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/rooms.service';
import { IGetRoomConditionsReportForReceptionDomain } from '../../../application/ports/in/other-domains/get-room-conditions-report-for-reception';
import { ReloadRoomConditionsService } from '../services/reload-room-conditions.service';

@Component({
    selector: 'app-room-conditions-report',
    templateUrl: './room-conditions-report.component.html',
    styleUrls: ['./room-conditions-report.component.scss'],
})
export class RoomConditionsReportComponent implements OnInit {
    private getRoomConditionsReportForReception: IGetRoomConditionsReportForReceptionDomain;
    roomConditionsReport!: IRoomConditionsReport;

    constructor(
        private readonly reloadRoomConditionsService: ReloadRoomConditionsService,

        roomsPersistenceService: RoomsPersistenceService,
    ) {
        this.getRoomConditionsReportForReception = roomsPersistenceService;
    }

    ngOnInit(): void {
        this.loadRoomConditionsReport();
        this.reloadRoomConditions();
    }
    loadRoomConditionsReport() {
        this.getRoomConditionsReportForReception
            .getRoomConditionReport()
            .subscribe((response: IRoomConditionsReport) => {
                console.log(response);
                this.roomConditionsReport = response;
            });
    }
    reloadRoomConditions() {
        this.reloadRoomConditionsService.reloadRoomsConditiions$.subscribe((response: boolean) => {
            if (response) this.loadRoomConditionsReport();
        });
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRoomConditionsReport } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room-conditions-report';
import { RoomsPersistenceService } from 'src/app/modules/configuration-hotel/rooms/infraestructure/out/rooms.service';
import { IGetRoomConditionsReportForReceptionDomain } from '../../../application/ports/in/other-domains/get-room-conditions-report-for-reception';
import { ReloadRoomConditionsService } from '../services/reload-room-conditions.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-room-conditions-report',
    templateUrl: './room-conditions-report.component.html',
    styleUrls: ['./room-conditions-report.component.scss'],
})
export class RoomConditionsReportComponent implements OnInit, OnDestroy {
    private getRoomConditionsReportForReception: IGetRoomConditionsReportForReceptionDomain;
    roomConditionsReport!: IRoomConditionsReport;
    getRoomConditionsReportSubs!: Subscription;

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
    ngOnDestroy() {
        //if (this.getRoomConditionsReportSubs) this.getRoomConditionsReportSubs.unsubscribe();
    }
    loadRoomConditionsReport() {
        this.getRoomConditionsReportSubs = this.getRoomConditionsReportForReception
            .getRoomConditionReport()
            .subscribe((response: IRoomConditionsReport) => {
                //console.log(response);
                this.roomConditionsReport = response;
            });
    }
    reloadRoomConditions() {
        this.reloadRoomConditionsService.reloadRoomsConditiions$.subscribe((response: boolean) => {
            if (response) this.loadRoomConditionsReport();
        });
    }
}

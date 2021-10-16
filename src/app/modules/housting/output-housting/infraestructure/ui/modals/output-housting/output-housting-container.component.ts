import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RoomData } from 'src/app/modules/configuration-hotel/rooms/infraestructure/interfaces/room.data';
import { IHoustingResponse } from 'src/app/modules/housting/input-housting/infraestructure/interfaces/housting-response.interface';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { IOkComponentConfig } from 'src/app/shared/interfaces/ok-component-config/ok-component-config.interface';
import { OkComponent } from 'src/app/shared/modals/ok.component';
import { GetHoustingForOutputHoustingDomainPort } from '../../../../application/ports/out/other-domain/get-housting-for-output-housting-domain.port';

@Component({
    selector: 'app-output-housting-container',
    templateUrl: './output-housting-container.component.html',
    styleUrls: ['./output-housting-container.component.scss'],
})
export class OutputHoustingContainerComponent implements OnInit {
    private getHoustingForOutputHoustingDomainPort: GetHoustingForOutputHoustingDomainPort;
    housting!: IHoustingResponse;

    constructor(
        @Inject(MAT_DIALOG_DATA) public room: RoomData,
        houstingService: HoustingService,
        private dialog: MatDialog,
    ) {
        this.getHoustingForOutputHoustingDomainPort = houstingService;
    }

    ngOnInit(): void {
        this.obtainCurrentHousting();
    }
    private obtainCurrentHousting() {
        this.getHoustingForOutputHoustingDomainPort
            .getHousting(this.room.id)
            .subscribe((response: IHoustingResponse) => {
                console.log(response);
                this.housting = response;
            });
    }
    createHoustinConfirmed(event: boolean) {
        if (event) {
            this.openDialogOk();
        }
    }
    private openDialogOk() {
        const config: IOkComponentConfig = {
            message: 'Este alojamiento ha sido finalizado con éxito',
            useMethodsOkComponent: true,
        };
        let dialogRef = this.dialog.open(OkComponent, { data: config, width: '25%' });
    }
}

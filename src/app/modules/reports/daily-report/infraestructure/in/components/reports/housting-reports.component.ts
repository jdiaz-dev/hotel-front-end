import { Component, OnInit, OnDestroy } from '@angular/core';
import { IGetHoustingReportPort } from '../../../../application/ports/self-domain/get-housting-report.port';
import { HoustingReportService } from '../../../out/housting-report.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-housting-reports',
    templateUrl: './housting-reports.component.html',
    styleUrls: ['./housting-reports.component.scss'],
})
export class HoustingReportsComponent implements OnInit, OnDestroy {
    private getHoustingReportPort: IGetHoustingReportPort;
    private getHoustingReportSubs!: Subscription;

    constructor(houstingReportService: HoustingReportService) {
        this.getHoustingReportPort = houstingReportService;
    }

    ngOnInit(): void {
        this.loadHoustingReport();
    }
    ngOnDestroy(): void {
        this.getHoustingReportSubs.unsubscribe();
    }
    private loadHoustingReport() {
        this.getHoustingReportSubs = this.getHoustingReportPort.getHoustingReport().subscribe((response) => {
            console.log(response);
        });
    }
}

import { Component, Input, OnChanges } from '@angular/core';
import { IHoustingReport } from '../../interfaces/houstig-report.interface';
import { HoustingService } from 'src/app/modules/housting/input-housting/infraestructure/out/housting.service';
import { OutputHoustingService } from '../../out/output-housting.service';

@Component({
    selector: 'app-total-housting-report',
    templateUrl: './total-housting-report.component.html',
    styleUrls: ['./total-housting-report.component.scss'],
})
export class TotalHoustingReportComponent implements OnChanges {
    @Input('houstingId') houstingId!: number;
    columnsHoustingReport: string[] = ['TotalPrice', 'MoneyPaid', 'LateApplied', 'CompletePayment'];
    houstingReport!: IHoustingReport;
    constructor(private outputHoustingService: OutputHoustingService) {}

    ngOnChanges(): void {
        this.loadOutputHousting();
    }
    loadOutputHousting() {
        this.outputHoustingService.getHoustingReport(this.houstingId).subscribe((response: IHoustingReport) => {
            console.log(response);
            this.houstingReport = response;
        });
    }
}

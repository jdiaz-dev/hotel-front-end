import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputHoustingRoutingModule } from './output-housting-routing.module';
import { OutputHoustingContainerComponent } from './infraestructure/ui/modals/output-housting-container.component';
import { DataHoustingComponent } from './infraestructure/ui/modals/data-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TotalHoustingReportComponent } from './infraestructure/ui/modals/total-housting-report.component';
import { ProductSaledReportComponent } from './infraestructure/ui/modals/product-saled-report.component';

@NgModule({
    declarations: [
        OutputHoustingContainerComponent,
        DataHoustingComponent,
        TotalHoustingReportComponent,
        ProductSaledReportComponent,
    ],
    imports: [CommonModule, OutputHoustingRoutingModule, SharedModule],
})
export class OutputHoustingModule {}

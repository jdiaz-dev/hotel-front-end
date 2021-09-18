import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputHoustingRoutingModule } from './output-housting-routing.module';
import { OutputHoustingContainerComponent } from './infraestructure/ui/modals/output-housting-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductSaledReportComponent } from './infraestructure/ui/modals/product-saled-report.component';
import { InputLateAppliedComponent } from './infraestructure/ui/modals/input-late-applied.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataHoustingComponent } from './infraestructure/ui/modals/data-housting.component';
import { TotalHoustingReportComponent } from './infraestructure/ui/modals/total-housting-report.component';

@NgModule({
    declarations: [
        OutputHoustingContainerComponent,
        DataHoustingComponent,
        TotalHoustingReportComponent,
        ProductSaledReportComponent,
        InputLateAppliedComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, OutputHoustingRoutingModule, SharedModule],
})
export class OutputHoustingModule {}

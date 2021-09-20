import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OutputHoustingRoutingModule } from './output-housting-routing.module';
import { OutputHoustingContainerComponent } from './infraestructure/ui/modals/output-housting/output-housting-container.component';
import { DataHoustingComponent } from './infraestructure/ui/modals/output-housting/data-housting.component';
import { FinishHoustingComponent } from './infraestructure/ui/modals/output-housting/finish-housting.component';
import { ProductSaledReportComponent } from './infraestructure/ui/modals/output-housting/product-saled-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CostHoustingComponent } from './infraestructure/ui/modals/output-housting/cost-housting/cost-housting.component';
import { InputLateAppliedComponent } from './infraestructure/ui/modals/output-housting/cost-housting/input-late-applied.component';

@NgModule({
    declarations: [
        OutputHoustingContainerComponent,
        DataHoustingComponent,
        FinishHoustingComponent,
        ProductSaledReportComponent,
        InputLateAppliedComponent,
        CostHoustingComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, OutputHoustingRoutingModule, SharedModule],
})
export class OutputHoustingModule {}

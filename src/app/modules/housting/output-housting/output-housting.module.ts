import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OutputHoustingRoutingModule } from './output-housting-routing.module';
import { OutputHoustingContainerComponent } from './infraestructure/ui/modals/output-housting/output-housting-container.component';
import { DataHoustingComponent } from './infraestructure/ui/modals/output-housting/data-housting.component';
import { ButtonFinishHoustingComponent } from './infraestructure/ui/modals/output-housting/button-finish-housting.component';
import { ProductsSaledComponent } from './infraestructure/ui/modals/output-housting/products-saled.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CostHoustingComponent } from './infraestructure/ui/modals/output-housting/cost-housting/cost-housting.component';
import { InputLateAppliedComponent } from './infraestructure/ui/modals/output-housting/cost-housting/input-late-applied.component';

@NgModule({
    declarations: [
        OutputHoustingContainerComponent,
        DataHoustingComponent,
        ButtonFinishHoustingComponent,
        ProductsSaledComponent,
        InputLateAppliedComponent,
        CostHoustingComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, OutputHoustingRoutingModule, SharedModule],
})
export class OutputHoustingModule {}

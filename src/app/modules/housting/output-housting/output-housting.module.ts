import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputHoustingRoutingModule } from './output-housting-routing.module';
import { OutputHoustingContainerComponent } from './infraestructure/ui/components/output-housting-container.component';
import { DataHoustingComponent } from './infraestructure/ui/components/data-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [OutputHoustingContainerComponent, DataHoustingComponent],
    imports: [CommonModule, OutputHoustingRoutingModule, SharedModule],
})
export class OutputHoustingModule {}

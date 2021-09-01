import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputHoustingRoutingModule } from './output-housting-routing.module';
import { OutputHoustingContainerComponent } from './infraestructure/ui/components/output-housting-container.component';
import { DataHoustingComponent } from './infraestructure/ui/components/data-housting.component';

@NgModule({
  declarations: [
    OutputHoustingContainerComponent,
    DataHoustingComponent
  ],
  imports: [
    CommonModule,
    OutputHoustingRoutingModule
  ]
})
export class OutputHoustingModule { }

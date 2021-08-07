import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoustingRoutingModule } from './housting-routing.module';

import { HoustingContainerComponent } from './infraestructure/ui/components/housting-container.component';
import { DataRoomComponent } from './infraestructure/ui/components/data-room.component';
import { DataClientComponent } from './infraestructure/ui/components/data-client.component';
import { DataHoustingComponent } from './infraestructure/ui/components/data-housting.component';


@NgModule({
  declarations: [
    DataRoomComponent,
    DataClientComponent,
    DataHoustingComponent,
    HoustingContainerComponent
  ],
  imports: [
    CommonModule,
    HoustingRoutingModule
  ]
})
export class HoustingModule { }

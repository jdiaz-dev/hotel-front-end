import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoustingRoutingModule } from './housting-routing.module';

import { HoustingContainerComponent } from './infraestructure/ui/components/housting-container.component';
import { DataRoomComponent } from './infraestructure/ui/components/data-room.component';
import { DataClientComponent } from './infraestructure/ui/components/data-client.component';
import { DataHoustingComponent } from './infraestructure/ui/components/data-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataRoomComponent,
    DataClientComponent,
    DataHoustingComponent,
    HoustingContainerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HoustingRoutingModule,
    SharedModule
  ]
})
export class HoustingModule { }

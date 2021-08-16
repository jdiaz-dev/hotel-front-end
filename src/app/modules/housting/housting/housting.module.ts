import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoustingRoutingModule } from './housting-routing.module';

import { HoustingContainerComponent } from './infraestructure/ui/components/housting-container.component';
import { DataRoomComponent } from './infraestructure/ui/components/data-room.component';
import { DataHoustingComponent } from './infraestructure/ui/components/data-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsModule } from '../../clients/clients.module';


@NgModule({
  declarations: [
    DataRoomComponent,

    DataHoustingComponent,
    HoustingContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsModule,
    HoustingRoutingModule,
    SharedModule
  ]
})
export class HoustingModule { }

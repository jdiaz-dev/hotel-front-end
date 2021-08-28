import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoustingRoutingModule } from './housting-routing.module';

import { InputHoustingContainerComponent } from './infraestructure/ui/components/input-housting-container.component';
import { DataRoomComponent } from './infraestructure/ui/components/data-room.component';
import { FormInputHoustingComponent } from './infraestructure/ui/components/form-input-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsModule } from '../../clients/clients.module';


@NgModule({
  declarations: [
    DataRoomComponent,
    FormInputHoustingComponent,
    InputHoustingContainerComponent
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

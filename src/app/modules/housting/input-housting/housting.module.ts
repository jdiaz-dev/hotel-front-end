import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoustingRoutingModule } from './housting-routing.module';

import { InputHoustingContainerComponent } from './infraestructure/ui/modals/input-housting-container.component';
import { DataRoomComponent } from './infraestructure/ui/modals/data-room.component';
import { FormInputHoustingComponent } from './infraestructure/ui/modals/form-input-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsModule } from '../../clients/clients.module';
import { ButtonCreateHoustingComponent } from './infraestructure/ui/modals/button-create-housting.component';

@NgModule({
    declarations: [
        DataRoomComponent,
        FormInputHoustingComponent,
        InputHoustingContainerComponent,
        ButtonCreateHoustingComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ClientsModule, HoustingRoutingModule, SharedModule],
})
export class HoustingModule {}

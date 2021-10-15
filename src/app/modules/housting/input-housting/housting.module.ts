import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoustingRoutingModule } from './housting-routing.module';

import { InputHoustingContainerComponent } from './infraestructure/ui/modals/input-housting-container.component';
import { DataRoomComponent } from './infraestructure/ui/modals/data-room.component';
import { FormInputHoustingComponent } from './infraestructure/ui/modals/form-input-housting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsModule } from '../../clients/clients.module';
import { ButtonsComponent } from './infraestructure/ui/modals/buttons.component';

@NgModule({
    declarations: [DataRoomComponent, FormInputHoustingComponent, InputHoustingContainerComponent, ButtonsComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ClientsModule, HoustingRoutingModule, SharedModule],
})
export class HoustingModule {}

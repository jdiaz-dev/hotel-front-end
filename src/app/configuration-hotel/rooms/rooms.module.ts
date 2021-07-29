import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomContainerComponent } from './infraestructure/ui/components/room-container.component';
import { RoomCollectionComponent } from './infraestructure/ui/components/room-collection.component';
import { CreateUpdateRoomComponent } from './infraestructure/ui/modals/create-update-room.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoomContainerComponent,
    RoomCollectionComponent,
    CreateUpdateRoomComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RoomsRoutingModule,
  ]
})
export class RoomsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelLevelRoutingModule } from './hotel-level-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LevelCollectionComponent } from './infraestructure/ui/components/level-collection.component';
import { CreateAndUpdateLevelComponent } from './infraestructure/ui/modals/create-and-update-level.component';
import { HotelLevelContainerComponent } from './infraestructure/ui/components/hotel-level-container.component';


@NgModule({
  declarations: [
    HotelLevelContainerComponent,
    CreateAndUpdateLevelComponent,
    LevelCollectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HotelLevelRoutingModule,
    SharedModule
  ]
})
export class HotelLevelModule { }

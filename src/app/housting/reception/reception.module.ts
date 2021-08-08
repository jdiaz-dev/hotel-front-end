import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionContainerComponent } from './infraestructure/ui/components/reception-container.component';
import { ListLevelsComponent } from './infraestructure/ui/components/list-levels.component';
import { ListRoomsComponent } from './infraestructure/ui/components/list-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReceptionContainerComponent,
    ListLevelsComponent,
    ListRoomsComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    SharedModule
  ]
})
export class ReceptionModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomContainerComponent } from './infraestructure/ui/components/room-container.component';

const routes: Routes = [
  { path: 'configuracion', component: RoomContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }

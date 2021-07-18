import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCategoriesContainerComponent } from './infraestructure/ui/components/room-categories-container.component';

const routes: Routes = [
  {path:'configuracion', component:RoomCategoriesContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomCategoriesRoutingModule { }

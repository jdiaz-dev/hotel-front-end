import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelLevelContainerComponent } from './infraestructure/ui/components/hotel-level-container.component';



const routes: Routes = [
  {
    path: 'configuracion',
    component: HotelLevelContainerComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelLevelRoutingModule { }

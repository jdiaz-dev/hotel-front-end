import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoustingContainerComponent } from './infraestructure/ui/components/housting-container.component';

const routes: Routes = [
  { path: 'habitaciones', component: HoustingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoustingRoutingModule { }

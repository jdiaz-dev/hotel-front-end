import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputHoustingContainerComponent } from './infraestructure/ui/components/input-housting-container.component';

const routes: Routes = [
  { path: 'habitaciones', component: InputHoustingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoustingRoutingModule { }

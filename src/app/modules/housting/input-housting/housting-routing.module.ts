import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputHoustingContainerComponent } from './infraestructure/ui/modals/input-housting-container.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoustingRoutingModule { }

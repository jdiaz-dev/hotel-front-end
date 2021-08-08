import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionContainerComponent } from './infraestructure/ui/components/reception-container.component';

const routes: Routes = [
  { path: '', component: ReceptionContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }

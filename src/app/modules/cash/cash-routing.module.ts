import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashContainerComponent } from './infraestructure/ui/components/cash-container.component';

const routes: Routes = [
  { path: 'apertura-caja', component: CashContainerComponent },
  { path: 'cierre-caja', component: CashContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsContainerComponent } from './infraestructure/in/components/reports-container.component';

const routes: Routes = [{ path: 'diario', component: ReportsContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}

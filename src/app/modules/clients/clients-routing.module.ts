import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsContainerComponent } from './infraestructure/ui/components/clients-container/clients-container.component';

const routes: Routes = [{ path: '', component: ClientsContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsRoutingModule {}

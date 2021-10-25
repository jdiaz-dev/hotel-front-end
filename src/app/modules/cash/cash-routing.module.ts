import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashContainerComponent } from './adapters/ui/components/cash-container.component';

const routes: Routes = [{ path: '', component: CashContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CashRoutingModule {}

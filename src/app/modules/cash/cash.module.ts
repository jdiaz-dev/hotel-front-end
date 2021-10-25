import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRoutingModule } from './cash-routing.module';
import { CashContainerComponent } from './adapters/ui/components/cash-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImpossibleCreateCashComponent } from './adapters/ui/modals/impossible-create-cash.component';
import { CashesOpenedListComponent } from './adapters/ui/components/list-cash/cashes-opened-list.component';
import { CashesClosedListComponent } from './adapters/ui/components/list-cash/cashes-closed-list.component';
import { FormCashComponent } from './adapters/ui/components/list-cash/form-cash.component';

@NgModule({
    declarations: [
        CashContainerComponent,
        FormCashComponent,
        ImpossibleCreateCashComponent,
        CashesOpenedListComponent,
        CashesClosedListComponent,
    ],
    imports: [CommonModule, CashRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class CashModule {}

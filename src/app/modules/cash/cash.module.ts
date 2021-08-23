import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRoutingModule } from './cash-routing.module';
import { CashContainerComponent } from './infraestructure/ui/components/cash-container.component';
import { CreateCashComponent } from './infraestructure/ui/components/create-cash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImpossibleCreateCashComponent } from './infraestructure/ui/modals/impossible-create-cash.component';

@NgModule({
  declarations: [
    CashContainerComponent,
    CreateCashComponent,
    ImpossibleCreateCashComponent
  ],
  imports: [
    CommonModule,
    CashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CashModule { }

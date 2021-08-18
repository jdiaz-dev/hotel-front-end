import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashRoutingModule } from './cash-routing.module';
import { CashContainerComponent } from './infraestructure/ui/components/cash-container.component';
import { CreateCashComponent } from './infraestructure/ui/components/create-cash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CashContainerComponent,
    CreateCashComponent
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

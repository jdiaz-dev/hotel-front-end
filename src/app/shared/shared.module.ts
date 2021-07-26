import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { ConfirmRemoveComponent } from './modals/confirm-remove.component';

@NgModule({
  declarations: [


    ConfirmRemoveComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [MaterialModule, ConfirmRemoveComponent]
})
export class SharedModule { }


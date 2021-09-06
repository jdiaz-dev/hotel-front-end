import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { ConfirmRemoveComponent } from './modals/confirm-remove.component';
import { OkComponent } from './modals/ok.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [ConfirmRemoveComponent, OkComponent, PaginatorComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MaterialModule, ConfirmRemoveComponent, PaginatorComponent],
})
export class SharedModule {}

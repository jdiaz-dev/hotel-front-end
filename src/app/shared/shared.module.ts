import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { ConfirmRemoveComponent } from './modals/confirm-remove.component';
import { OkComponent } from './modals/ok.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SafeHtmlPipe } from './components/navbar/safe-html.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent, ConfirmRemoveComponent, OkComponent, PaginatorComponent, SafeHtmlPipe],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [MaterialModule, ConfirmRemoveComponent, PaginatorComponent],
})
export class SharedModule {}

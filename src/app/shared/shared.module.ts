import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { ConfirmComponent } from './modals/confirm-remove.component';
import { OkComponent } from './modals/ok.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SafeHtmlPipe } from './components/navbar/safe-html.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [NavbarComponent, ConfirmComponent, OkComponent, PaginatorComponent, SearcherComponent, SafeHtmlPipe],
    imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule, CoreModule],
    exports: [MaterialModule, ConfirmComponent, PaginatorComponent, SearcherComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { PaginatorIntlService } from './services/paginator-intl.service';

const MaterialModules = [
  MatSidenavModule,
  MatTreeModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatTableModule,
  MatCardModule,
  MatTabsModule,
  MatPaginatorModule,
];

@NgModule({
  exports: [MaterialModules],
  imports: [MaterialModules],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }],
})
export class MaterialModule {}

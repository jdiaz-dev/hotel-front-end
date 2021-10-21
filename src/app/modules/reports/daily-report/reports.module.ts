import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsContainerComponent } from './infraestructure/in/components/reports-container.component';
import { ReportListComponent } from './infraestructure/in/components/report-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HoustingReportsComponent } from './infraestructure/in/components/reports/housting-reports.component';
import { SaleReportsComponent } from './infraestructure/in/components/reports/sale-reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './infraestructure/in/components/reports/reports.component';

@NgModule({
    declarations: [ReportsContainerComponent, ReportListComponent, SaleReportsComponent, HoustingReportsComponent, ReportsComponent],
    imports: [CommonModule, ReportsRoutingModule, SharedModule],
})
export class ReportsModule {}

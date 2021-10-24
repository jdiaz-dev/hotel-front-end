import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsContainerComponent } from './infraestructure/in/components/reports-container.component';
import { ReportListComponent } from './infraestructure/in/components/report-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HoustingReportsComponent } from './infraestructure/in/components/reports-collection/housting-reports.component';
import { SaleReportsComponent } from './infraestructure/in/components/reports-collection/sale-reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportCollectionComponent } from './infraestructure/in/components/reports-collection/report-collection.component';

@NgModule({
    declarations: [
        ReportsContainerComponent,
        ReportListComponent,
        SaleReportsComponent,
        HoustingReportsComponent,
        ReportCollectionComponent,
    ],
    imports: [CommonModule, ReportsRoutingModule, SharedModule],
})
export class ReportsModule {}

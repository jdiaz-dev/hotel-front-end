import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HotelLevelModule } from './modules/configuration-hotel/hotel-level/hotel-level.module';
import { SharedModule } from './shared/shared.module';
import { RoomCategoriesModule } from './modules/configuration-hotel/room-categories/room-categories.module';
import { CoreModule } from './core/core.module';
import { RoomsModule } from './modules/configuration-hotel/rooms/rooms.module';
import { HoustingModule } from './modules/housting/input-housting/housting.module';
import { ReceptionModule } from './modules/housting/reception/reception.module';
import { ClientsModule } from './modules/clients/clients.module';
import { CashModule } from './modules/cash/cash.module';
import { OutputHoustingModule } from './modules/housting/output-housting/output-housting.module';
import { ProductsModule } from './modules/sales/products/products.module';
import { ProductSalesModule } from './modules/sales/product-sales/product-sales.module';
import { ReportsModule } from './modules/reports/daily-reports/reports.module';
import { HoustingReportModule } from './modules/reports/housting-report/housting-report.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        BrowserAnimationsModule,
        HotelLevelModule,
        RoomCategoriesModule,
        RoomsModule,
        HoustingModule,
        ReceptionModule,
        ClientsModule,
        CashModule,
        OutputHoustingModule,
        ProductsModule,
        ProductSalesModule,
        ReportsModule,
        HoustingReportModule,
    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
})
export class AppModule {}

//icons-bed-hotel https://icon-sets.iconify.design/ion/bed/

//command to run angular project : npm run nghm -- serve

//run to production npm run start --configuration production

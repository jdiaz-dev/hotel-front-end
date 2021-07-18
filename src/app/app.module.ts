import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HotelLevelModule } from './configuration-hotel/hotel-level/hotel-level.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RoomCategoriesModule } from './configuration-hotel/room-categories/room-categories.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HotelLevelModule,
    RoomCategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//command to run angular project : npm run nghm -- serve


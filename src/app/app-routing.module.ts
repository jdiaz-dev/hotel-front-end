import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'menu',
    component: NavbarComponent,
    children: [
      {
        path: 'niveles',
        loadChildren: () => import('./configuration-hotel/hotel-level/hotel-level-routing.module').then((m) => m.HotelLevelRoutingModule)

      },
      {
        path: 'categorias-habitaciones',
        loadChildren: () => import('./configuration-hotel/room-categories/room-categories-routing.module').then((m) => m.RoomCategoriesRoutingModule)

      },
      {
        path: 'habitaciones',
        loadChildren: () => import('./configuration-hotel/rooms/rooms-routing.module').then((m) => m.RoomsRoutingModule)

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

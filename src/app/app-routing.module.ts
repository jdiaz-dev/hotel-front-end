import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [
    {
        path: 'menu',
        component: NavbarComponent,
        children: [
            //reception
            {
                path: 'recepcion/:mode',
                loadChildren: () =>
                    import('./modules/housting/reception/reception-routing.module').then(
                        (m) => m.ReceptionRoutingModule,
                    ),
            },
            {
                path: 'salida/:mode',
                loadChildren: () =>
                    import('./modules/housting/reception/reception-routing.module').then(
                        (m) => m.ReceptionRoutingModule,
                    ),
            },

            //cashes
            {
                path: 'caja',
                loadChildren: () => import('./modules/cash/cash-routing.module').then((m) => m.CashRoutingModule),
            },

            //point of sale
            {
                path: 'productos',
                loadChildren: () =>
                    import('./modules/sales/products/products-routing.module').then((m) => m.ProductsRoutingModule),
            },
            {
                path: 'venta/:mode',
                loadChildren: () =>
                    import('./modules/housting/reception/reception-routing.module').then(
                        (m) => m.ReceptionRoutingModule,
                    ),
            },

            //configuration hotel
            {
                path: 'niveles',
                loadChildren: () =>
                    import('./modules/configuration-hotel/hotel-level/hotel-level-routing.module').then(
                        (m) => m.HotelLevelRoutingModule,
                    ),
            },
            {
                path: 'categorias-habitaciones',
                loadChildren: () =>
                    import('./modules/configuration-hotel/room-categories/room-categories-routing.module').then(
                        (m) => m.RoomCategoriesRoutingModule,
                    ),
            },
            {
                path: 'habitaciones',
                loadChildren: () =>
                    import('./modules/configuration-hotel/rooms/rooms-routing.module').then(
                        (m) => m.RoomsRoutingModule,
                    ),
            },
            {
                path: 'reportes',
                loadChildren: () =>
                    import('./modules/reports/daily-report/reports-routing.module').then((m) => m.ReportsRoutingModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

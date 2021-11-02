import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./core/core-routing.module').then((m) => m.CoreRoutingModule),
    },

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
                canActivate: [AuthGuard],
            },
            {
                path: 'salida/:mode',
                loadChildren: () =>
                    import('./modules/housting/reception/reception-routing.module').then(
                        (m) => m.ReceptionRoutingModule,
                    ),
                canActivate: [AuthGuard],
            },

            //cashes
            {
                path: 'caja/:mode',
                loadChildren: () => import('./modules/cash/cash-routing.module').then((m) => m.CashRoutingModule),
                canActivate: [AuthGuard],
            },

            //point of sale
            {
                path: 'productos',
                loadChildren: () =>
                    import('./modules/sales/products/products-routing.module').then((m) => m.ProductsRoutingModule),
                canActivate: [AuthGuard],
            },
            {
                path: 'venta/:mode',
                loadChildren: () =>
                    import('./modules/housting/reception/reception-routing.module').then(
                        (m) => m.ReceptionRoutingModule,
                    ),
                canActivate: [AuthGuard],
            },

            //configuration hotel
            {
                path: 'niveles',
                loadChildren: () =>
                    import('./modules/configuration-hotel/hotel-level/hotel-level-routing.module').then(
                        (m) => m.HotelLevelRoutingModule,
                    ),
                canActivate: [AuthGuard],
            },
            {
                path: 'categorias-habitaciones',
                loadChildren: () =>
                    import('./modules/configuration-hotel/room-categories/room-categories-routing.module').then(
                        (m) => m.RoomCategoriesRoutingModule,
                    ),
                canActivate: [AuthGuard],
            },
            {
                path: 'habitaciones',
                loadChildren: () =>
                    import('./modules/configuration-hotel/rooms/rooms-routing.module').then(
                        (m) => m.RoomsRoutingModule,
                    ),
                canActivate: [AuthGuard],
            },
            {
                path: 'reportes',
                loadChildren: () =>
                    import('./modules/reports/daily-reports/reports-routing.module').then(
                        (m) => m.ReportsRoutingModule,
                    ),
                canActivate: [AuthGuard],
            },

            //clients
            {
                path: 'clientes',
                loadChildren: () =>
                    import('./modules/clients/clients-routing.module').then((m) => m.ClientsRoutingModule),
                canActivate: [AuthGuard],
            },
        ],
    },
    {
        path: '**',
        loadChildren: () => import('./core/core-routing.module').then((m) => m.CoreRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { Menu } from './menu.interface';
import { CONFIG } from 'src/config/config';
import { ICONS_SIDEBAR } from './icons-menu';

export const MENU: Menu[] = [
    {
        name: 'Recepción',
        url: `/menu/recepcion/${CONFIG.RECEPTION_MODE.INPUT_HOUSTING}`, //input-housting -> url param
        icon: ICONS_SIDEBAR.RECEPTION,
    },
    {
        name: 'Salida',
        url: `/menu/salida/${CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING}`, //output-housting -> url param
        icon: ICONS_SIDEBAR.OUTPUT,
    },
    {
        name: 'Caja',
        children: [
            {
                name: 'Apertura de caja',
                url: `/menu/caja/${CONFIG.CASH_MODE.OPEN_CASH}`,
            },
            {
                name: 'Cierre de caja',
                url: `/menu/caja/${CONFIG.CASH_MODE.CLOSE_CASH}`,
            },
        ],
        icon: ICONS_SIDEBAR.CASH,
    },
    {
        name: 'Punto de venta',
        children: [
            {
                name: 'Productos',
                url: '/menu/productos',
            },
            {
                name: 'Venta',
                url: `/menu/venta/${CONFIG.RECEPTION_MODE.PRODUCT_SALES}`,
            },
        ],
        icon: ICONS_SIDEBAR.SALE_POINT,
    },
    {
        name: 'Configuración',
        children: [
            {
                name: 'Habitaciones',
                url: '/menu/habitaciones/configuracion',
            },
            {
                name: 'Categorías',
                url: '/menu/categorias-habitaciones/configuracion',
            },
            {
                name: 'Niveles',
                url: '/menu/niveles/configuracion',
            },
        ],
        icon: ICONS_SIDEBAR.CONFIGURATION,
    },
    {
        name: 'Clientes',
        url: `/menu/clientes/`,
        icon: ICONS_SIDEBAR.CLIENTS,
    },
    {
        name: 'Reportes',
        children: [
            {
                name: 'Reporte Diario',
                url: '/menu/reportes/diario',
            },
            /* {
                name: 'Reporte Mensual/Anual',
                url: '/menu/reportes/mensual-anual',
            }, */
        ],
        icon: ICONS_SIDEBAR.REPORTS,
    },
];

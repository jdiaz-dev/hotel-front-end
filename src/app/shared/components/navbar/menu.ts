import { Menu } from "./menu.interface";
import { CONFIG } from 'src/config/config';

export const MENU: Menu[] = [
  {
    name: 'Recepción',
    url: `/menu/recepcion/${CONFIG.RECEPTION_MODE.INPUT_HOUSTING}`, //input-housting -> url param
  },
  {
    name: 'Salida',
    url: `/menu/salida/${CONFIG.RECEPTION_MODE.OUTPUT_HOUSTING}`, //output-housting -> url param
  },
  {
    name: 'Caja',
    children: [
      {
        name: 'Apertura de caja',
        url: '/menu/caja/apertura-caja'
      },
      {
        name: 'Cierre de caja',
        url: '/menu/caja/cierre-caja'
      },
    ]
  },
  {
    name: 'Punto de venta',
    children: [
      {
        name: 'Productos',
        url: '/menu/productos'
      },
      {
        name: 'Venta',
        url: `/menu/venta/${CONFIG.RECEPTION_MODE.PRODUCT_SALES}`
      },
    ]
  },
  {
    name: 'Configuración',
    children: [
      {
        name: 'Habitaciones',
        url: '/menu/habitaciones/configuracion'

      },
      {
        name: 'Categorías',
        url: '/menu/categorias-habitaciones/configuracion'
      },
      {
        name: 'Niveles',
        url: '/menu/niveles/configuracion'
      },
    ]
  },
  {
    name: 'Clientes',
    children: [

    ]
  },
  {
    name: 'Reportes',
    children: [
      { name: 'Reporte' }
    ]
  },

]

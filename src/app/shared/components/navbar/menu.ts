import { Menu } from "./menu.interface";

export const MENU: Menu[] = [
  {
    name: 'Recepción',
    children: [
    ]
  },
  {
    name: 'Salida',
    children: [

    ]
  },
  {
    name: 'Recepción',
    url: '/menu/recepcion',
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
      { name: 'Productos' },
      { name: 'Ventas' },
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
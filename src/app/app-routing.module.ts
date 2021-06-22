import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'agregar-p',
    loadChildren: () => import('./agregar-p/agregar-p.module').then( m => m.AgregarPPageModule)
  },
  {
    path: 'detalle-p',
    loadChildren: () => import('./detalle-p/detalle-p.module').then( m => m.DetallePPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'clientes-a',
    loadChildren: () => import('./clientes-a/clientes-a.module').then( m => m.ClientesAPageModule)
  },
  {
    path: 'clientes-d',
    loadChildren: () => import('./clientes-d/clientes-d.module').then( m => m.ClientesDPageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'hacer-venta',
    loadChildren: () => import('./hacer-venta/hacer-venta.module').then( m => m.HacerVentaPageModule)
  },
  {
    path: 'realizar-venta',
    loadChildren: () => import('./realizar-venta/realizar-venta.module').then( m => m.RealizarVentaPageModule)
  },
  {
    path: 'registro-ventas',
    loadChildren: () => import('./registro-ventas/registro-ventas.module').then( m => m.RegistroVentasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

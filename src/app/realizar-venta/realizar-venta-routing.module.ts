import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarVentaPage } from './realizar-venta.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarVentaPageRoutingModule {}

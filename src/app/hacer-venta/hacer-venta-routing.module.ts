import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HacerVentaPage } from './hacer-venta.page';

const routes: Routes = [
  {
    path: '',
    component: HacerVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HacerVentaPageRoutingModule {}

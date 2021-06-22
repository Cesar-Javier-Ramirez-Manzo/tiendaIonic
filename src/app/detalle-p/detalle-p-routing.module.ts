import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePPage } from './detalle-p.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePPageRoutingModule {}

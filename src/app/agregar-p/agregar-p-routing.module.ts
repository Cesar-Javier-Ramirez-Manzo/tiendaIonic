import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPPage } from './agregar-p.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesAPage } from './clientes-a.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesAPageRoutingModule {}

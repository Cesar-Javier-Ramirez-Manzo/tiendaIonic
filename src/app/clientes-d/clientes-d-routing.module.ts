import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesDPage } from './clientes-d.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesDPageRoutingModule {}

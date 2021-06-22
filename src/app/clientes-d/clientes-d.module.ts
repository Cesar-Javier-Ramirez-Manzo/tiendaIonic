import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesDPageRoutingModule } from './clientes-d-routing.module';

import { ClientesDPage } from './clientes-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesDPageRoutingModule
  ],
  declarations: [ClientesDPage]
})
export class ClientesDPageModule {}

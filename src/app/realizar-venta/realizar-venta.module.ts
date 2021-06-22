import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarVentaPageRoutingModule } from './realizar-venta-routing.module';

import { RealizarVentaPage } from './realizar-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarVentaPageRoutingModule
  ],
  declarations: [RealizarVentaPage]
})
export class RealizarVentaPageModule {}

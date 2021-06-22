import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HacerVentaPageRoutingModule } from './hacer-venta-routing.module';

import { HacerVentaPage } from './hacer-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HacerVentaPageRoutingModule
  ],
  declarations: [HacerVentaPage]
})
export class HacerVentaPageModule {}

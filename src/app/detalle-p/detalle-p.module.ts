import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePPageRoutingModule } from './detalle-p-routing.module';

import { DetallePPage } from './detalle-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePPageRoutingModule
  ],
  declarations: [DetallePPage]
})
export class DetallePPageModule {}

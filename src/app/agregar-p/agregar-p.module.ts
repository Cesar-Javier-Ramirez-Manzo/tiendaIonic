import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPPageRoutingModule } from './agregar-p-routing.module';

import { AgregarPPage } from './agregar-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPPageRoutingModule
  ],
  declarations: [AgregarPPage]
})
export class AgregarPPageModule {}

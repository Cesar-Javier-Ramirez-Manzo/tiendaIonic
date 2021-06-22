import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './login/login.module';
import { RegistroPageModule} from './registro/registro.module'
import { ProductosPageModule } from './productos/productos.module';
import { DetallePPageModule } from './detalle-p/detalle-p.module';
import { AgregarPPageModule } from './agregar-p/agregar-p.module';
import { ClientesAPageModule } from './clientes-a/clientes-a.module';
import { ClientesDPageModule } from './clientes-d/clientes-d.module';
import { ClientesPageModule } from './clientes/clientes.module';
import { VentasPageModule } from './ventas/ventas.module';
import { RealizarVentaPageModule } from './realizar-venta/realizar-venta.module';
import { RegistroVentasPageModule } from './registro-ventas/registro-ventas.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,LoginPageModule,RegistroPageModule,ProductosPageModule,AgregarPPageModule,DetallePPageModule,ClientesPageModule,ClientesAPageModule,ClientesDPageModule,VentasPageModule,RealizarVentaPageModule,RegistroVentasPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

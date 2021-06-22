import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AgregarPPage} from  '../agregar-p/agregar-p.page'
import { DetallePPage } from '../detalle-p/detalle-p.page';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  backButtonSubscription;
  registros: any;
  listado: [];
  total = 0;
  tienda:string;
  constructor(public http: HttpClient, public modalController: ModalController,private router: Router
              ) {
                this.tienda = this.router.getCurrentNavigation().extras.state.tienda;
    this.cargarProductos();
  }
  ngOnInit() {
  }
  cargarProductos() {
    const uri = 'https://maisiquel.000webhostapp.com/api2.php?comando=listar&tienda='+this.tienda;//agregar parametro tienda
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }
  async editarProducto(item) {
    const modal = await this.modalController.create({
      component: DetallePPage,
      componentProps: {dato: item,tienda: this.tienda}
    });
    modal.onDidDismiss()
    .then(() => {
      this.cargarProductos();
  });
    return await modal.present();
  }

  
  async presentarAgregar() {
    const modal = await this.modalController.create({
      component: AgregarPPage,
      componentProps: {tienda: this.tienda}
    });
    modal.onDidDismiss()
    .then(() => {
      this.cargarProductos();
  });
    return await modal.present();
  }
}

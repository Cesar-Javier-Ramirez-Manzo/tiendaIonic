import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ClientesAPage } from '../clientes-a/clientes-a.page';
import { ClientesDPage } from '../clientes-d/clientes-d.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
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
    cargarProductos() {
      const uri = 'https://maisiquel.000webhostapp.com/api3.php?comando=listar&tienda='+this.tienda;//agregar tienda
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
        component: ClientesDPage,
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
        component: ClientesAPage,
        componentProps: {tienda: this.tienda}
      });
      modal.onDidDismiss()
      .then(() => {
        this.cargarProductos();
    });
      return await modal.present();
    }
  ngOnInit() {
  }

}

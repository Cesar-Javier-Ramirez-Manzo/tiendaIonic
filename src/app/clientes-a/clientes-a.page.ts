import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-clientes-a',
  templateUrl: './clientes-a.page.html',
  styleUrls: ['./clientes-a.page.scss'],
})
export class ClientesAPage implements OnInit {
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  tienda: string;
  url = '';
  respuesta: any;
  constructor(public http: HttpClient, public modalController: ModalController,public navParams: NavParams) {
    this.tienda = navParams.get('tienda');
   }

  guardarProducto() {
    const uri = 'https://maisiquel.000webhostapp.com/api3.php?comando=agregar&nombre=' + this.nombre 
    + '&direccion=' + this.direccion
    + '&telefono=' + this.telefono +
    '&correo=' + this.correo +
    '&tienda='+this.tienda;//agregar tienda
    this.http.get(uri).subscribe(data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
    this.modalController.dismiss();
      }
    }

  });
  }
cancelar() {
this.modalController.dismiss();
}
  ngOnInit() {
  }

}

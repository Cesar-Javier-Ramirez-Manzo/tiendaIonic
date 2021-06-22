import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.page.html',
  styleUrls: ['./agregar-p.page.scss'],
})
export class AgregarPPage implements OnInit {
  nombre: string;
  descripcion: string;
  cantidad: number;
  preciodeventa: number;
  preciodecosto: number;
  url = '';
  respuesta: any;
  tienda: string;
  constructor(public http: HttpClient,public navParams: NavParams, public modalController: ModalController, private router: Router) { 
    this.tienda = navParams.get('tienda');
   
  }

  guardarProducto() {
    const uri = 'https://maisiquel.000webhostapp.com/api2.php?comando=agregar&nombre=' + this.nombre 
    + '&descripcion=' + this.descripcion
    + '&preciodecosto=' + this.preciodecosto +
    '&preciodeventa=' + this.preciodeventa +
    '&cantidad=' + this.cantidad +
    '&fotografia=' + this.url+'&tienda='+this.tienda;//Agregar tienda
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

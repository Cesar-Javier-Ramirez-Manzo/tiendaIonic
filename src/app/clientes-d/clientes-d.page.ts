import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clientes-d',
  templateUrl: './clientes-d.page.html',
  styleUrls: ['./clientes-d.page.scss'],
})
export class ClientesDPage implements OnInit {
  respuesta: any;
  tienda: string;
  item: any;
  constructor(public navParams: NavParams,
              public http: HttpClient,
              public modalController: ModalController,
              public alertController: AlertController) {
                this.tienda = navParams.get('tienda');
this.item = navParams.get('dato');
   }

  ngOnInit() {
  }

  actualizarProducto(item) {
    const uri = 'https://maisiquel.000webhostapp.com/api3.php?comando=editar&nombre=' + item.nombre
    + '&direccion=' + item.direccion
    + '&telefono=' + item.telefono +
    '&correo=' + item.correo +
    '&tienda='+this.tienda+'&id=' + item.id;//agregar tienda
    this.http.get(uri).subscribe(async data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Actualizar',
          message: mensaje,
          buttons: ['OK']
        });
        await alert.present();
        this.modalController.dismiss();
      }
    }

  });
  }

  eliminarProducto(id) {
    const uri = 'https://maisiquel.000webhostapp.com/api3.php?comando=eliminar&id=' + id;
    this.http.get(uri).subscribe(async data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Eliminar',
          message: mensaje,
          buttons: ['OK']
        });
        await alert.present();
        this.modalController.dismiss();
      }
    }

    });
  }

  regresar() {
  this.modalController.dismiss();
  }

}

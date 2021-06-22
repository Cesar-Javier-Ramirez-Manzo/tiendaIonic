import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-realizar-venta',
  templateUrl: './realizar-venta.page.html',
  styleUrls: ['./realizar-venta.page.scss'],
})
export class RealizarVentaPage implements OnInit {
  respuesta: any;
  item: any;
  backButtonSubscription;
  registros: any;
  listado: [];
  total = 0;
  cantidadV: number;
  fechaV: string;
  tienda:string;
  constructor(public navParams: NavParams,
    public http: HttpClient,
    public modalController: ModalController,
    public alertController: AlertController) {
      this.tienda = navParams.get('tienda');
    this.item = navParams.get('dato');
    this.cargarProductos();
    }


  cargarProductos(){
    const uri = 'https://maisiquel.000webhostapp.com/api2.php?comando=listar&tienda='+this.tienda;//agregar tienda
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }
  regresar() {
    this.modalController.dismiss();
    }
  
    venderProducto(item1){
      //arreglar los items 

      var tc=item1.preciodecosto*this.cantidadV
      var tv=item1.preciodeventa*this.cantidadV
      const uri2='https://maisiquel.000webhostapp.com/api4.php?comando=agregar&nombre=' + this.item.nombre
      + '&producto=' + item1.nombre
      + '&cantidad=' + this.cantidadV +
      '&totalcomprado=' + tc +
      '&totalvendido='+ tv+
      '&fecha='+this.fechaV+
      '&tienda='+this.tienda;//agregar tienda
      
      var newC=item1.cantidad-this.cantidadV
      const uri1 = 'https://maisiquel.000webhostapp.com/api2.php?comando=editar&nombre=' + item1.nombre
    + '&descripcion=' + item1.descripcion
    + '&preciodecosto=' + item1.preciodecosto +
    '&preciodeventa=' + item1.preciodeventa +
    '&cantidad=' + newC +
    '&fotografia=' + item1.fotografia +
    '&id=' + item1.id+"&tienda="+this.tienda;//agregar tienda
    this.http.get(uri1).subscribe(async data => {
      this.respuesta = data;
      const mensaje = "Total a pagar: "+tv;
      if (!!mensaje) {
      {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Vendido',
          message: mensaje,
          buttons: ['OK']
        });
        await alert.present();
        
      }
    }

  });

  this.http.get(uri2).subscribe(data => {
    this.respuesta = data;
    const mensaje = this.respuesta.mensaje;
    if (!!mensaje) {
    {
  this.modalController.dismiss();
    }
  }

});
    }
  ngOnInit() {
  }

}

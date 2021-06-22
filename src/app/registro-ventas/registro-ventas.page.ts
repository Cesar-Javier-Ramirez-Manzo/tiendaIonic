import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-ventas',
  templateUrl: './registro-ventas.page.html',
  styleUrls: ['./registro-ventas.page.scss'],
})
export class RegistroVentasPage implements OnInit {
  backButtonSubscription;
  registros: any;
  listado: [];
  total = 0;
  fechaFiltro: string;
  tienda: string;
  constructor(public http: HttpClient, public modalController: ModalController,public alertController: AlertController,private router: Router) {
    this.tienda = this.router.getCurrentNavigation().extras.state.tienda;
    this.cargarVentas();
   }

   cargarVentas() {
    const uri = 'https://maisiquel.000webhostapp.com/api4.php?comando=listar&tienda='+this.tienda;//agregar tienda
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }
  filtrar() {
    const uri = 'https://maisiquel.000webhostapp.com/api4.php?comando=filtrar&fecha='+this.fechaFiltro+'&tienda='+this.tienda;//agregar tienda
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }
  

  async detallesVenta(item){
    
    var mensaje="Ganancia total de: $"+(item.totalvendido-item.totalcomprado)

    const alert = await this.alertController.create({
      header: 'Informacion',
      subHeader: 'Detalles venta',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RealizarVentaPage} from '../realizar-venta/realizar-venta.page'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  backButtonSubscription;
  registros: any;
  listado: [];
  total = 0;
  tienda:string;
  constructor(public http: HttpClient, public modalController: ModalController, public navCtrl: NavController,private router: Router
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
  async venderProducto(item) {
    const modal = await this.modalController.create({
    component: RealizarVentaPage,
    componentProps: {dato: item,tienda: this.tienda}
    });
    modal.onDidDismiss()
    .then(() => {
    this.cargarProductos();
    });
    return await modal.present();
    }
    irRegistroVentas(){
      this.navCtrl.navigateForward('/registro-ventas', {state: {tienda: this.tienda}});
    }
    ngOnInit() {
    }
}

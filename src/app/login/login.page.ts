import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  respuesta: any
  usuario: string;
  contrasena: string;
  tienda: any;
  
  constructor(public loginCtrl: ModalController, public alertController: AlertController, public http: HttpClient, public navCtrl: NavController,private router: Router ) { 
    this.tienda = this.router.getCurrentNavigation().extras.state.tienda;
  }

  ngOnInit() {
    
  }


  irProductos(){
    
    this.navCtrl.navigateForward('/productos', {state: {tienda: this.tienda}});
  }
  irClientes(){
    this.navCtrl.navigateForward('/clientes', {state: {tienda: this.tienda}});
  }
  irVenta(){
    this.navCtrl.navigateForward('/ventas', {state: {tienda: this.tienda}});
  }
}
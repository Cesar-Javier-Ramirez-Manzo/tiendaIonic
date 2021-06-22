import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  respuesta: any
  usuario: string;
  contrasena: string;
  tienda: any;
  
  constructor(public loginCtrl: ModalController, public alertController: AlertController, public http: HttpClient, public navCtrl: NavController ) {
    
  }

  async entrar() {
    const uri='https://maisiquel.000webhostapp.com/log.php?usuario='+this.usuario+'&pass='+this.contrasena
    this.http.get(uri).subscribe(async data => {
      
      const datos=data;
      this.respuesta = datos;
      this.tienda=this.respuesta.records;
      console.log(this.tienda[0])
      if (this.usuario === this.tienda[0].usuario && this.contrasena === this.tienda[0].pass) {
        this.navCtrl.navigateForward('/login', {state: {tienda: this.usuario}});
      } else {
        const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Inicio de sesión',
        message: 'No se encontro esta tienda',
        buttons: ['OK']
    });
  
        await alert.present();
  
  }

  })

    
  }

  irRegistro(){
    this.navCtrl.navigateForward('/registro');
  }

  

}
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario:string;
  nombre:string;
  contrasena:string;
  respuesta: any;
  constructor(public loginCtrl: ModalController,public http: HttpClient, public navCtrl: NavController) { }

  ngOnInit() {
    this.loginCtrl.dismiss();
  }

  agregarTienda(){
    const uri= 'https://maisiquel.000webhostapp.com/bd_insert_user.php?nombre='+this.nombre+'&usuario='+this.usuario+'&pass='+this.contrasena
    this.http.get(uri).subscribe(data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
      this.loginCtrl.dismiss();
      }
    }

  });
  }

  
  


}

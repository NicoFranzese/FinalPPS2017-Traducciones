import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  //Traducciones
  public traduccionClave;
  public traduccionEmail;
  public traduccionIngresar;
  public traduccionOIngresarCon;

  

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) 
  {
    //Si aún no se presionó ningún lenguaje, se setea por defecto Español
    if ((localStorage.getItem("Lenguaje") == "") || (localStorage.getItem("Lenguaje") == null) || (localStorage.getItem("Lenguaje") == undefined)){
      localStorage.setItem("Lenguaje", "Es");
    }
    //Le paso el lenguaje que se presionó en sesiones anteriores dentro de la APP
    this.traducir(localStorage.getItem("Lenguaje"));

  }

  //Método que traduce objetos de la pagina 
  traducir(lenguaje){    
    //Guardo en el localStorage el Lenguaje seleccionado
    localStorage.setItem("Lenguaje",lenguaje);
    //Según lenguaje seleccionado se traducen los objetos.
    if(lenguaje == 'Es'){
      this.traduccionClave = "Clave";
      this.traduccionEmail = "Email";
      this.traduccionIngresar = "Ingresar";
      this.traduccionOIngresarCon = "O puede ingresar con:";
    }else if(lenguaje == 'Usa'){
      this.traduccionClave = "Password";
      this.traduccionEmail = "E-mail";
      this.traduccionIngresar = "Enter";
      this.traduccionOIngresarCon = "Or you can enter with:";
    }else if(lenguaje == 'Br'){
      this.traduccionClave = "Senha";
      this.traduccionEmail = "E-mail";
      this.traduccionIngresar = "Digite";
      this.traduccionOIngresarCon = "Ou você pode entrar com:";
    }

  }


  ionViewDidLoad() {
    
  }



  validacion(){
    this.mostrarToast("Esto no es una versión que permita ingresar a la APP");   
  }

  private mostrarToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    }).present();
  }



}

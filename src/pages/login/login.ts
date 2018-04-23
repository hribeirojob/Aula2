import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public valid
  public groupInfo: any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
        this.groupInfo = this.navParams.get('groupInfo')
        // console.log(this.groupInfo.usuario);
  }

  ionViewDidLoad() {
   
  }

  irFormulario(){
    // validar se o usuario e senha estao corretas
    if(this.groupInfo.usuario === 'unipam', this.groupInfo.senha === '123')
      {this.valid = 1
          let alert = this.alertCtrl.create({
            title: 'Login',
            subTitle: 'Bem vindo!',
            buttons: [
              {
               text: 'Entre',
               handler: data => {
               this.navCtrl.push('FormularioPage');
               }  
              }
            ]
          });
          alert.present();
      }

    else
      {this.valid = 0
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Suas credenciais não foram aceitas!',
          buttons: ['Voltar']
        });
        alert.present();
      }  
  }

  Voltar(){
    this.navCtrl.push(HomePage)
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public usuario: String
  public senha: String
  public FormLogin : FormGroup
  
  constructor(
    public navCtrl: NavController,
    public FrBuilder: FormBuilder)
    { this.FormLogin = FrBuilder.group
      ({
        usuario: [null, [Validators.required]],
        senha: [null, [Validators.required]]
      })
    }
  ButLogin(){
    this.navCtrl.push('LoginPage', {groupInfo: this.FormLogin.value})
    console.log(this.FormLogin.value)
  }


}

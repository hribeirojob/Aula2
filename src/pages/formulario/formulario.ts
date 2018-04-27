import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  public FormCadast : FormGroup
  public Nome: String
  public Sobrenome: String
  public Endereco: String
  public Telefone: Number
  public CPF: Number

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public FrB: FormBuilder ) 
                {this.FormCadast = FrB.group
                  ({ Nome: [null, [Validators.required]],
                    Sobrenome: [null, [Validators.required]],
                    Endereco: [null, [Validators.required]],
                    Telefone: [null,[Validators.required]],
                    CPF: [null, [Validators.required]]
                  })
                }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  show_log(){
    console.log(this.FormCadast.value)
  }

}

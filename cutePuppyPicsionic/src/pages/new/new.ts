import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LugaresServicos } from '../../services/lugares.services';

/**
 * Generated class for the NewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  private item: {};
  private valor: {titulo: string, senha: string};
  
  // Variavel que verifica se o botão de add foi clicado, caso não, add o valor antigo de novo na lista.
  private verifica = false;


  constructor(private places: LugaresServicos, private nav: NavController, private navParams: NavParams) {
      
      this.item = {};

      if(this.navParams.get('item') != undefined){
        this.item = this.navParams.get('item');
        this.valor = this.navParams.get('item');
      }
      console.log(this.navParams.get('item'));
  }

  onAddPlace(value: {titulo: string, senha: string}){
    this.places.addLugar(value);
    this.verifica = true;
    this.nav.pop();
  }

  ionViewWillLeave(){
    console.log("Saindo do add: " + this.valor);
    console.log(this.item);
    if(this.verifica == false && this.valor != undefined){
        this.places.addLugar(this.valor);
        console.log('Add cancelado, add object antigo');
    }
  }

}

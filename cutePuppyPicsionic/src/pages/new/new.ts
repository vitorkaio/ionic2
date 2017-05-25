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

  constructor(private places: LugaresServicos, private nav: NavController) {
  }

  onAddPlace(value: {titulo: string}){

    this.places.addLugar(value);
    this.nav.pop();

  }

}

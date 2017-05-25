import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPage } from '../new/new';
import { LugaresServicos } from '../../services/lugares.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: {titulo: string}[] = [];

  constructor(public navCtrl: NavController, private placesServices: LugaresServicos) {

  }

  ionViewWillEnter(){

    this.placesServices.getLugar().then(
      (places)=> this.places = places
    );

  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPage);
  }

}

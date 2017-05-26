import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPage } from '../new/new';
import { LugaresServicos } from '../../services/lugares.services';
import { ModalController } from 'ionic-angular';
import { SampleModalPage } from './../sample-modal/sample-modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private places: any[] = [];
  private placesSearchs: any[] = [];
  private start: number = 0;
  private searchTerm: string = '';

  private isOn: boolean = false;

  constructor(public navCtrl: NavController, private placesServices: LugaresServicos, public modalCtrl: ModalController) {
    
  }


  openModal(item: {titulo: string, senha: string}) {
    let data = {titulo: item.titulo, senha: item.senha};
    let myModal = this.modalCtrl.create(SampleModalPage, data);
    myModal.present();
  }

  ionViewWillEnter(){
    console.log('Alguém entrou');
    this.searchTerm = '';
    this.placesServices.getLugar().then(
      (places)=>{ 
        this.places = places; 
        this.placesSearchs = this.places;
    });

  }

  ionViewDidEnter(){
    console.log('Alguém LOADDDD');
    this.searchTerm = '';
    this.placesServices.getLugar().then(
      (places)=>{ 
        this.places = places; 
        this.placesSearchs = this.places;
    });
  }

  /*ionViewDidLoad(){
    console.log('Refresh!');
    this.placesServices.getLugar().then(
      (places)=> this.places = places
    );
  }*/

   /*ionViewWillUnload(){
    console.log('Alguém saiu');
    this.placesServices.getLugar().then(
      (places)=> this.places = places
    );

  }*/

  editPlace(item: {titulo: string, senha: string}){
    let aux = item;
    this.placesServices.dropLugar(item.titulo);

    this.navCtrl.push(NewPage, {
        item: aux
    });

  }

  removePlace(item: {titulo: string, senha: string}){
    console.log('Deletado: ' + item.titulo);
    this.placesServices.dropLugar(item.titulo);
    this.ionViewDidEnter();
  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPage);
    this.isOn = false;
  }

  doInfinite(infiniteScroll:any) {
     console.log('doInfinite, start is currently '+ this.start);
     this.start+=3;
     
     this.placesServices.getLugar().then(()=>{
       infiniteScroll.complete();
     });
     
  }

  // ********************************* Pesquisa elementos *********************************

  getButtonText(): string {
    return `Switch ${ this.isOn ? 'Off' : 'On' }`;
  }
  setState(): void {
    this.isOn = !this.isOn;
  }

  toggleDetails() {
    this.isOn = !this.isOn;
  }
  
  filterItems(searchTerm){
 
        return this.places.filter((item) => {
            return item.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
  }

  ionViewDidLoad() {
 
        this.setFilteredItems();
 
    }
 
    setFilteredItems() {
        console.log(this.searchTerm);
        this.placesSearchs = this.filterItems(this.searchTerm);
 
    }

} // Fim da classe. 

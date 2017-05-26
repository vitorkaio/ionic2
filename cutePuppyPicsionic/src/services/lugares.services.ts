import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';

@Injectable()
export class LugaresServicos{

    private lugares: {titulo: string}[] = [];

    constructor(private storage: Storage){}

    addLugar(lugar: {titulo: string, senha: string}){
        this.lugares.push(lugar);
        this.storage.set('lugares', this.lugares);
    }

    getLugar(){
        return this.storage.get('lugares').then(
            (l)=>{
            this.lugares = l == null ? [] : l;
            return this.lugares.slice();
        });
    }

    dropLugar(lugar: string){
        this.storage.get('lugares').then(
            (l)=>{
            this.lugares = l == null ? [] : l;
            
            let i = 0;
            for(let linha in this.lugares){
                if(lugar == this.lugares[i].titulo){
                    this.lugares.splice(i, 1);
                    this.storage.set('lugares', this.lugares);
                }
                i++;
            }
        });
    }

    /*var db = JSON.parse(localStorage.getItem("notas"));

    for (i in db.itens){
        
        if(titulo == db.itens[i].titulo){
            db.itens.splice(i, 1);
            localStorage.setItem("notas", JSON.stringify(db));
        }
    }*/

}
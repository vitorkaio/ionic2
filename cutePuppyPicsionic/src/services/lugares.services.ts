import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';

@Injectable()
export class LugaresServicos{

    private lugares: {titulo: string}[] = [];

    constructor(private storage: Storage){}

    addLugar(lugar: {titulo: string}){
        this.lugares.push(lugar);
        this.storage.set('lugares', this.lugares);
    }

    getLugar(){
        return this.storage.get('lugares').then((l)=>{
            this.lugares = l == null ? [] : l;
            return this.lugares.slice();
        });
    }

}
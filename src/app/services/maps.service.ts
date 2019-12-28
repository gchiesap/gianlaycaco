import { Injectable } from '@angular/core';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor( private iab: InAppBrowser ) {}

  abrirMapa(url: string) {
    return this.iab.create(url, '_blank');
  }
}

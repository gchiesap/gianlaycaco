import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { FirestoreService } from '../services/firestore.service';

declare var require: any;

@Component({
  selector: 'app-modal-regalo',
  templateUrl: './modal-regalo.page.html',
  styleUrls: ['./modal-regalo.page.scss'],
})
export class ModalRegaloPage implements OnInit {

  @Input() regaloData;

  nombre: string;
  mensaje: string;

  constructor( private modalCtrl: ModalController,
               private iab: InAppBrowser,
               private db: FirestoreService ) { 
                
               }

  salirSinRegalar() {
    this.modalCtrl.dismiss();
  }

  salirRegalando( link: any ) {
    const browser = this.iab.create(link.url, '_blank');

    const regalo = {
      'nombre': this.nombre,
      'mensaje': this.mensaje,
      'regalo': link.id,
      'Fecha': new Date()
    };

    this.db.subirRegalo(regalo);

    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}

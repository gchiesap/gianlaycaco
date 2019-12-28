import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { MapsService } from '../services/maps.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor( private alertCtrl: AlertController,
               private db: FirestoreService,
               private maps: MapsService,
               public toastController: ToastController ) {
  }

  async presentToast(nombre: string) {
    const toast = await this.toastController.create({
      message: 'Gracias por confirmar ' + nombre,
      duration: 2000
    });
    toast.present();
  }


  async reservar() {
    const alert = await this.alertCtrl.create({
      header: 'Confirma tu asistencia',
      inputs: [
        {
          name: 'participante',
          type: 'text',
          placeholder: 'Nombre y Apellido'
        },
        {
          name: 'aclaracion',
          type: 'text',
          placeholder: 'Alguna aclaración?'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: ( data ) => {
            console.log('Confirm Ok');
            const participante = {
              'participante': data.participante,
              'aclaracion': data.aclaracion,
              'fecha': new Date()
            };

            this.db.reservar(participante);
            this.presentToast(participante.participante);
          }
        }
      ]
    });

    await alert.present();
  }


  abrirMapa(url: string) {
      
    const browser = this.maps.abrirMapa(url);
  }

  text:any = {
    Year: 'Años',
    Month: 'Meses',
    Weeks: "Semanas",
    Days: "Días",
    Hours: "Horas",
    Minutes: "Minutos",
    Seconds: "Segundos",
    MilliSeconds: "Milisegundos"
  };
}

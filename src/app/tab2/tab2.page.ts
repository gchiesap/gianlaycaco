import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { FirestoreService } from '../services/firestore.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  lista: any[] = [];

  ngOnInit() {
    this.db.getCanciones()
                .subscribe( (data: any) => {
                  console.log(data[0]);
                  // tslint:disable-next-line: forin
                  this.lista = [];
                  for ( const el in data[0]) {
                    this.lista.push(data[0][el]);
                  }
                });
    this.spotify.getToken();
  }

  tabs: string = "lista";

  canciones: any[] = [];
  


  constructor( private spotify: SpotifyService,
               private db: FirestoreService,
               public toastController: ToastController ) {
  }


  search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return i;
        }
    }
    return -1;
  }


  buscarCanciones(event) {

    this.spotify.getMusic(event.target.value).subscribe( (data: any) => {
      //console.log(data);
      this.canciones = data.tracks.items;
      console.log(this.canciones);
    });
  }

  sumarVoto(cancion: any){
    let index = this.search(cancion.id, this.lista);

    this.lista[index].votada ++;

    this.db.updateData(Object.assign({}, this.lista));
    this.presentToast();

  }

  insertLista(cancion: any) {
    //console.log(cancion);

    const cancionSelected = {
      'id': cancion.id,
      'nombre': cancion.name,
      'artista': cancion.artists[0].name,
      'imagen': cancion.album.images[0].url,
      'votada': 1
    };

    let index = this.search(cancionSelected.id, this.lista);

    

    if ( index > -1 ) {
      this.lista[index].votada ++;
    } else {
      this.lista.push(cancionSelected);
    }
    
    console.log(this.lista);

    this.db.updateData(Object.assign({}, this.lista));
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Excelente tema, gracias por tu voto!',
      duration: 2000
    });
    toast.present();
  }

}

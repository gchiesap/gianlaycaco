import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  //x: any;

  constructor( private db: AngularFirestore) {
      //this.db.collection('contenido').valueChanges();
   }

  getCanciones() {
    return this.db.collection('contenido').valueChanges();
  }

  updateData(lista: any[]) {
    return this.db.collection('contenido').doc('listaTemas').update(lista);
  }

  subirRegalo(regalo: any) {
    return this.db.collection('regalos').add(regalo);
  }

  reservar( participante: any) {
    return this.db.collection('participantes').add(participante);
  }

}

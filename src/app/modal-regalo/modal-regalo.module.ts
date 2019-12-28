import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalRegaloPage } from './modal-regalo.page';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalRegaloPage],
  providers: [ InAppBrowser ]
})
export class ModalRegaloPageModule {}

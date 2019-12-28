import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ModalRegaloPage } from '../modal-regalo/modal-regalo.page';
import { ModalRegaloPageModule } from '../modal-regalo/modal-regalo.module';

@NgModule({
  entryComponents: [ ModalRegaloPage ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    ModalRegaloPageModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
//import { CountDown } from 'ng2-date-countdown';





@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])

    
  ],
  declarations: [Tab1Page/*, CountDown*/],
  providers: [ InAppBrowser ]
})


export class Tab1PageModule {}

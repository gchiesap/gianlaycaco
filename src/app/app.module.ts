import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirestoreService } from './services/firestore.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MapsService } from './services/maps.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [  ],
  imports: [BrowserModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFirestoreModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            
            HttpClientModule,
            ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    SpotifyService,
    MapsService,
    FirestoreService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

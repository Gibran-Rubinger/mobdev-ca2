import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//import for the favourite fuction
import { IonicStorageModule } from '@ionic/storage';
//import for the Infinite Scroll fuction
import { InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  //do never forget to declare your imports here as well
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,IonicStorageModule,IonicStorageModule.forRoot(),InfiniteScrollModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

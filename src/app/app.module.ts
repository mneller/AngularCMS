import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import {AppConfigService, initializeApp} from './app-config.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ImpressumComponent } from './common/impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AppConfigService,
    { // For initialization before the application starts.
      // Further info's are here:
      // https://www.tektutorialshub.com/angular/angular-runtime-configuration/
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

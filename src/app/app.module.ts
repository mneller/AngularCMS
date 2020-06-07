import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import {AppConfigService, initializeApp} from './app-config.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ImpressumComponent } from './common/impressum/impressum.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import * as fromAppReducer from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {initialAppState} from './app.reducer';

export const appRoutes: Routes = [
  { path: 'impressum', component: ImpressumComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({ app: fromAppReducer.reducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoxComponent } from './component/box/box.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { AppRoutes } from './app.routes';
import { TechnicalsComponent } from './component/technicals/technicals.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import {MatTableModule, MatToolbarModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    TechnicalsComponent
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

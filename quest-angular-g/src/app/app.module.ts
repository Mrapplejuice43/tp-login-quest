import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ClientComponent } from './client/client.component';
import { FiliereComponent } from './filiere/filiere.component';
import { MatiereComponent } from './matiere/matiere.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { SalleComponent } from './salle/salle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    StagiaireComponent,
    FormateurComponent,
    ClientComponent,
    FiliereComponent,
    MatiereComponent,
    OrdinateurComponent,
    SalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

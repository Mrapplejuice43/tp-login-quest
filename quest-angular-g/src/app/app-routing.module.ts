import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { MatiereComponent } from './matiere/matiere.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { SalleComponent } from './salle/salle.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "stagiaire", component: StagiaireComponent},
  {path: "formateur", component: FormateurComponent},
  {path: "client", component: ClientComponent},
  {path: "filiere", component: FiliereComponent},
  {path: "matiere", component: MatiereComponent},
  {path: "ordinateur", component: OrdinateurComponent},
  {path: "salle", component: SalleComponent},
  {path: "", redirectTo: 'home', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private listeStagiaires: Array<Stagiaire> = new Array<Stagiaire>()

  constructor( ) {
    this.listeStagiaires.push(new Stagiaire(1, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", "1999-02-08", "BAC_5"))
    this.listeStagiaires.push(new Stagiaire(2, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", "1999-02-08", "BAC_5"))
    this.listeStagiaires.push(new Stagiaire(3, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", "1999-02-08", "BAC_5"))
    this.listeStagiaires.push(new Stagiaire(4, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", "1999-02-08", "BAC_5"))
    this.listeStagiaires.push(new Stagiaire(5, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", "1999-02-08", "BAC_5"))
    this.listeStagiaires.push(new Stagiaire(6, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", "1999-02-08", "BAC_5"))
  }

  public findAll(): Array<Stagiaire> {
    return this.listeStagiaires
  }

  public findById(id: number): Stagiaire {
    return this.listeStagiaires.find(s => s.id == id)
  }

  public insert(stagiaire: Stagiaire): void {
    let editedStagiaire = this.findById(stagiaire.id);
    let idx = this.listeStagiaires.indexOf(editedStagiaire)

    let maxId = -1
    this.listeStagiaires.forEach(s => maxId = Math.max(maxId, s.id))
    stagiaire.id = maxId + 1
    stagiaire.version = 0

    this.listeStagiaires.push({...stagiaire})
  }

  public update(stagiaire: Stagiaire): void {
    let editedStagiaire = this.findById(stagiaire.id);
    if(editedStagiaire) {
      let idx = this.listeStagiaires.indexOf(editedStagiaire)
      stagiaire.version++
      this.listeStagiaires[idx] = {...stagiaire}
    }
  }

  public delete(id: number) {
    let s = this.findById(id);
    let idx = this.listeStagiaires.indexOf(s)
    this.listeStagiaires.splice(idx, 1)
  }

}

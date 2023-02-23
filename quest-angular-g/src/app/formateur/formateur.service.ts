import { Injectable } from '@angular/core';
import { Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
    private listeFormateurs: Array<Formateur> = new Array<Formateur>()

    constructor( ) {
      this.listeFormateurs.push(new Formateur(1, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", true, 3))
      this.listeFormateurs.push(new Formateur(2, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", true, 3))
      this.listeFormateurs.push(new Formateur(3, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", true, 3))
      this.listeFormateurs.push(new Formateur(4, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", true, 3))
      this.listeFormateurs.push(new Formateur(5, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", true, 3))
      this.listeFormateurs.push(new Formateur(6, 0, "M", "Nom1", "Prenom1", "mail1@mail.com", true, 3))
    }

    public findAll(): Array<Formateur> {
      return this.listeFormateurs
    }

    public findById(id: number): Formateur {
      return this.listeFormateurs.find(s => s.id == id)
    }

    public insert(formateur: Formateur): void {
      let maxId = -1
      this.listeFormateurs.forEach(s => maxId = Math.max(maxId, s.id))
      formateur.id = maxId + 1
      formateur.version = 0

      this.listeFormateurs.push({...formateur})
    }

    public update(formateur: Formateur): void {
      let editedFormateur = this.findById(formateur.id);
      if(editedFormateur) {
        let idx = this.listeFormateurs.indexOf(editedFormateur)
        formateur.version++
        this.listeFormateurs[idx] = {...formateur}
      }
    }

    public delete(id: number) {
      let s = this.findById(id);
      let idx = this.listeFormateurs.indexOf(s)
      this.listeFormateurs.splice(idx, 1)
    }
}

import { Component } from '@angular/core';
import { FiliereService } from './filiere.service';
import { Filiere, Formateur } from '../model';
import { FormateurService } from '../formateur/formateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.scss']
})
export class FiliereComponent {
  formFiliere: Filiere
  formFormateurId: number

  constructor( private filiereService: FiliereService, private formateurService: FormateurService) {}

  public findAll() {
    return this.filiereService.findAll();
  }

  listFormateurs(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add() {
    if(this.formFiliere) {
      let f = this.formateurService.findById(this.formFormateurId)
      if(f) {
        this.formFiliere.formateur = {...this.formateurService.findById(this.formFormateurId)}
      } else {
        f = undefined
      }

      if(this.formFiliere.id) {
        this.filiereService.update(this.formFiliere)
      } else {
        this.filiereService.insert(this.formFiliere)
      }

      this.formFiliere = undefined

    } else {
      this.formFiliere = new Filiere()
    }
  }

  cancel() {
    this.formFiliere = undefined
  }

  edit(id: number) {
    let req: Observable<Filiere> = this.filiereService.findById(id);
    req.subscribe((resp) => {
      this.formFiliere = {...resp}
    })
  }

  remove(id: number) {
    this.filiereService.delete(id)
  }
}

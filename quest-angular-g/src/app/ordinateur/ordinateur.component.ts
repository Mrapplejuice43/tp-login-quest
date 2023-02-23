import { Component } from '@angular/core';
import { OrdinateurService } from './ordinateur.service';
import { Ordinateur } from '../model';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.scss']
})
export class OrdinateurComponent {
  formOrdinateur: Ordinateur

  constructor( private ordinateurService: OrdinateurService) {}

  public findAll() {
    return this.ordinateurService.findAll();
  }

  add() {
    if(this.formOrdinateur) {
      if(this.formOrdinateur.id) {
        this.ordinateurService.update(this.formOrdinateur)
      } else {
        this.ordinateurService.insert(this.formOrdinateur)
      }

      this.formOrdinateur = undefined
    } else {
      this.formOrdinateur = new Ordinateur()
    }
  }

  cancel() {
    this.formOrdinateur = undefined
  }

  edit(id: number) {
    this.formOrdinateur = {...this.ordinateurService.findById(id)}
  }

  remove(id: number) {
    this.ordinateurService.delete(id)
  }
}

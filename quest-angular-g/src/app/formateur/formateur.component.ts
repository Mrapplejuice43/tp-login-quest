import { Component } from '@angular/core';
import { FormateurService } from './formateur.service';
import { Formateur } from '../model';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss'],
})
export class FormateurComponent {

  formFormateur: Formateur;

  constructor(private formateurService: FormateurService) {}

  findAll(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  edit(id: number) {
    this.formFormateur = {...this.formateurService.findById(id)}
  }

  cancel() {
    this.formFormateur = undefined
  }

  remove(id: number) {
    this.formateurService.delete(id)
  }

  add() {
    if(this.formFormateur) {
      if(this.formFormateur.id) {
        this.formateurService.update(this.formFormateur)
      } else {
        this.formateurService.insert(this.formFormateur)
      }

      this.formFormateur = undefined
    } else {
      this.formFormateur = new Formateur()
    }
  }
}

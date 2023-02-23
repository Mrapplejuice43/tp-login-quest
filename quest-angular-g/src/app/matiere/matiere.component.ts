import { Component } from '@angular/core';
import { MatiereService } from './matiere.service';
import { Matiere } from '../model';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent {
  formMatiere: Matiere

  constructor( private filiereService: MatiereService) {}

  public findAll() {
    return this.filiereService.findAll();
  }

  add() {
    if(this.formMatiere) {
      if(this.formMatiere.id) {
        this.filiereService.update(this.formMatiere)
      } else {
        this.filiereService.insert(this.formMatiere)
      }

      this.formMatiere = undefined
    } else {
      this.formMatiere = new Matiere()
    }
  }

  cancel() {
    this.formMatiere = undefined
  }

  edit(id: number) {
    this.formMatiere = {...this.filiereService.findById(id)}
  }

  remove(id: number) {
    this.filiereService.delete(id)
  }
}

import { Component } from '@angular/core';
import { Stagiaire } from '../model';
import { StagiaireService } from './stagiaire.service';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent {

  formStagiaire: Stagiaire

  constructor(
    private stagiaireService: StagiaireService
  ) {}

  public findAll() {
    return this.stagiaireService.findAll();
  }

  addStagiaire() {
    if(this.formStagiaire) {
      if(this.formStagiaire.id) {
        this.stagiaireService.update(this.formStagiaire)
      } else {
        this.stagiaireService.insert(this.formStagiaire)
      }

      this.formStagiaire = undefined
    } else {
      this.formStagiaire = new Stagiaire()
    }
  }

  cancel() {
    this.formStagiaire = undefined
  }

  edit(id: number) {
    this.formStagiaire = {...this.stagiaireService.findById(id)}
  }

  remove(id: number) {
    this.stagiaireService.delete(id)
  }
}

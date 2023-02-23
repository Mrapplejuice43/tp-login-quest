import { Injectable } from '@angular/core';
import { Matiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private listeMatieres: Array<Matiere> = new Array<Matiere>()

  constructor() {
    this.listeMatieres.push(new Matiere(0, 0, "libele", 1))
    this.listeMatieres.push(new Matiere(1, 0, "libele", 1))
    this.listeMatieres.push(new Matiere(2, 0, "libele", 1))
    this.listeMatieres.push(new Matiere(3, 0, "libele", 1))
    this.listeMatieres.push(new Matiere(6, 0, "libele", 1))
  }

  public findAll(): Array<Matiere> {
    return this.listeMatieres
  }

  public findById(id: number): Matiere {
    return this.listeMatieres.find(s => s.id == id)
  }

  public insert(matiere: Matiere): void {
    let maxId = -1
    this.listeMatieres.forEach(s => maxId = Math.max(maxId, s.id))
    matiere.id = maxId + 1
    matiere.version = 0

    this.listeMatieres.push({...matiere})
  }

  public update(matiere: Matiere): void {
    let editedStagiaire = this.findById(matiere.id);
    if(editedStagiaire) {
      let idx = this.listeMatieres.indexOf(editedStagiaire)
      matiere.version++
      this.listeMatieres[idx] = {...matiere}
    }
  }

  public delete(id: number) {
    let s = this.findById(id);
    let idx = this.listeMatieres.indexOf(s)
    this.listeMatieres.splice(idx, 1)
  }
}

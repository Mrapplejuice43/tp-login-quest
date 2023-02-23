import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordinateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  private listeOrdinateurs: Array<Ordinateur> = new Array<Ordinateur>()

  constructor(private http: HttpClient) {
    this.loadAll()
  }

  public loadAll(): void {
    this.http.get<Array<Ordinateur>>("http://localhost:8888/ordinateur").subscribe(resp => {
      this.listeOrdinateurs = resp
    })
  }

  public findAll(): Array<Ordinateur> {
    return this.listeOrdinateurs
  }

  public findById(id: number): Ordinateur {
    return this.listeOrdinateurs.find(s => s.id == id)
  }

  public insert(ordinateur: Ordinateur): void {
    let maxId = -1
    this.listeOrdinateurs.forEach(s => maxId = Math.max(maxId, s.id))
    ordinateur.id = maxId + 1
    ordinateur.version = 0

    this.listeOrdinateurs.push({...ordinateur})
  }

  public update(ordinateur: Ordinateur): void {
    let editedStagiaire = this.findById(ordinateur.id);
    if(editedStagiaire) {
      let idx = this.listeOrdinateurs.indexOf(editedStagiaire)
      ordinateur.version++
      this.listeOrdinateurs[idx] = {...ordinateur}
    }
  }

  public delete(id: number) {
    let s = this.findById(id);
    let idx = this.listeOrdinateurs.indexOf(s)
    this.listeOrdinateurs.splice(idx, 1)
  }
}

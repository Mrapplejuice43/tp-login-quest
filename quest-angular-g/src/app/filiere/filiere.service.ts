import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {
  private url = "http://localhost:8888/filiere"
  private listeFilieres: Array<Filiere> = new Array<Filiere>()

  constructor(private http: HttpClient) {
    this.loadAllFilliere()
  }

  public loadAllFilliere(): void {
    this.http
      .get<Array<Filiere>>(this.url)
      .subscribe((response) => {
        this.listeFilieres = response
      })
  }

  public findAll(): Array<Filiere> {
    return this.listeFilieres
  }

  public findById(id: number): Observable<Filiere> {
    return this.http.get<Filiere>(this.url + "/" + id)
  }

  public insert(filiere: Filiere): void {
    let req: Observable<Filiere> = this.http.post<Filiere>(this.url, filiere)

    let maxId = -1
    this.listeFilieres.forEach(s => maxId = Math.max(maxId, s.id))
    filiere.id = maxId + 1
    filiere.version = 0

    req.subscribe((resp) => {
      this.loadAllFilliere();
    })
    // this.listeFilieres.push({...filiere})
  }

  public update(client: Filiere): void {
    // let editedStagiaire = this.findById(client.id);
    // if(editedStagiaire) {
    //   let idx = this.listeFilieres.indexOf(editedStagiaire)
    //   client.version++
    //   this.listeFilieres[idx] = {...client}
    // }
  }

  public delete(id: number) {
  //   let s = this.findById(id);
  //   let idx = this.listeFilieres.indexOf(s)
  //   this.listeFilieres.splice(idx, 1)
  }
}

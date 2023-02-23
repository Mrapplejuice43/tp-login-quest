import { Injectable } from '@angular/core';
import { Client } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private listeClients: Array<Client> = new Array<Client>()

  constructor() {
    this.listeClients.push(new Client(0, 0, "AZERTYUIOPQSDF"))
    this.listeClients.push(new Client(1, 0, "AZERTYUIOPQSDF"))
    this.listeClients.push(new Client(2, 0, "AZERTYUIOPQSDF"))
    this.listeClients.push(new Client(3, 0, "AZERTYUIOPQSDF"))
    this.listeClients.push(new Client(6, 0, "AZERTYUIOPQSDF"))
  }

  public findAll(): Array<Client> {
    return this.listeClients
  }

  public findById(id: number): Client {
    return this.listeClients.find(s => s.id == id)
  }

  public insert(client: Client): void {
    let editedClient = this.findById(client.id);
    let idx = this.listeClients.indexOf(editedClient)

    let maxId = -1
    this.listeClients.forEach(s => maxId = Math.max(maxId, s.id))
    client.id = maxId + 1
    client.version = 0

    this.listeClients.push({...client})
  }

  public update(client: Client): void {
    let editedStagiaire = this.findById(client.id);
    if(editedStagiaire) {
      let idx = this.listeClients.indexOf(editedStagiaire)
      client.version++
      this.listeClients[idx] = {...client}
    }
  }

  public delete(id: number) {
    let s = this.findById(id);
    let idx = this.listeClients.indexOf(s)
    this.listeClients.splice(idx, 1)
  }

}

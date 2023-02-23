import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Client } from '../model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  formClient: Client

  constructor( private clientService: ClientService) {}

  public findAll() {
    return this.clientService.findAll();
  }

  add() {
    if(this.formClient) {
      if(this.formClient.id) {
        this.clientService.update(this.formClient)
      } else {
        this.clientService.insert(this.formClient)
      }

      this.formClient = undefined
    } else {
      this.formClient = new Client()
    }
  }

  cancel() {
    this.formClient = undefined
  }

  edit(id: number) {
    this.formClient = {...this.clientService.findById(id)}
  }

  remove(id: number) {
    this.clientService.delete(id)
  }
}

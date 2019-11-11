import { Client } from './client/client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

   client= new Client();

  constructor() { }

  setData(client: Client){
    this.client=client;
  }

  getData(): Client{
    return this.client;
  }
}

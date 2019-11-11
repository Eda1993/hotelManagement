import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Client } from '../client/client';
import { ReadService } from './read.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  client = new Client();

  constructor(private route: ActivatedRoute, 
    private _readService: ReadService) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.client.name = params.get("name");
        this.client.roomNr = params.get("roomNr");
      });
    }

  getClient(clientId: string) : void {
    this._readService.getClient(clientId)
    .subscribe((clientdata) => {
      this.client = clientdata
    }, (error) => {
      console.log(error);
    });
  }

}

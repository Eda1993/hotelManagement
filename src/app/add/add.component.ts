import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';
import { AddService } from './add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  clients: Client[];
  client = new Client();

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private _addService: AddService,
    private router: Router) {
  }

  ngOnInit() {
  }

  addClient(): void {
    this._addService.addClients(this.client)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/']); //te faqja home
        this.reset();
      },
        (error) => {
          console.log(error);
        });
  }

  private reset() {
    this.client.id = null;
    this.client.name = null;
    this.client.roomNr = null;
  }
}

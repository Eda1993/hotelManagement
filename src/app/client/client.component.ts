import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './client'
import { ClientService } from './client.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { ConfComponent } from '../conf/conf.component';
//import { ConfComponent } from '../conf/conf.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 //@Output() red: EventEmitter<any> = new EventEmitter();

  clients: Client[];
  client = new Client();
  p: number = 1;

  //url: string = 'http://localhost:8080/myapi/api/client';

  constructor(private _clientService: ClientService,
    private router: Router,
    private sharedService: SharedService,
    private dialog: MatDialog,
    //private http: Http,
    //private service: ConfService
    ) {
      // this.http.get(this.url).subscribe(data => {
      //   // Populating usersArray with names from API
      //   data.json().forEach(element => {
      //     this.clients.push(element);
      //   });
      // });
    }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this._clientService.getAllClients()
      .subscribe((clientData) => {
        this.clients = clientData
      }, (error) => {
        console.log(error);
      });
  }

  // deleteClient(clientId: string): void {
  //   this._clientService.deleteClient(clientId)
  //     .subscribe((response) => {console.log(response);
  //       this.getClients();
  //       alert("Nuk ka kthim mbrapa");
  //     },
  //     (error) => {
  //         console.log(error);
  //     });
  //   }

  // deleteClient(clientId: string): void {
  //   if(confirm("Are you sure?")) {
  //     this._clientService.deleteClient(clientId)
  //     .subscribe((response) => {console.log(response);
  //       this.getClients();
  //     },
  //     (error) => {
  //         console.log(error);
  //     });
  //   }
  // }

    getClientById(clientId: string): void {
      this._clientService.getClientById(clientId)
      .subscribe((clientData) => {
        this.client = clientData
        //this.red.emit(clientData); //to parent
        this.sharedService.setData(this.client);
        //this.router.navigate(['/update/'+this.client.id+"/"+this.client.name+"/"+this.client.roomNr]);
        this.router.navigate(['/update']);
        console.log(this.client);
      }, (error) => {
        console.log(error);
      });
  }


  //Per Popup



  // onClickedOutside(e: Event) {
  //   console.log('Clicked outside:', e);
  // }

//   public openConfirmationDialog() {
//     this.conf.confirm('Pershendetje', 'Je i sigurt?')
//     .then((confirmed) => console.log('User confirmed:', confirmed))
//     .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
// }

onDelete(clientId: string){
  //this.client.id = clientId;
  let dialogRef = this.dialog.open(ConfComponent, {
    data :{
      id: clientId
    }
   
 });
}

// pageChange(newPage: number) {
//   this.router.navigate([''], { queryParams: { page: newPage } });
// }

}

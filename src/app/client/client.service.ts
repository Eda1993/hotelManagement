
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Client } from './client';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

    constructor(private _httpService: Http) { }

    getAllClients(): Observable<Client[]> {
        return this._httpService.get("http://localhost:8080/myapi/api/client")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    deleteClient(clientId: string) {
        return this._httpService.delete("http://localhost:8080/myapi/api/client/" + clientId);
        
    }

    getClientById(clientId: string): Observable<Client> {
        return this._httpService.get("http://localhost:8080/myapi/api/client/" + clientId)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    // updateClient(client: Client) {
    //     let body = JSON.stringify(client);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._httpService.put("http://localhost:8080/myapi/api/client/" + client.id, body, options);    
    // }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Client } from '../client/client';
import 'rxjs/add/observable/throw';

@Injectable()
export class AddService {

    constructor(private _httpServices: Http) { }

    addClients(client: Client) {
        let body = JSON.stringify(client);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpServices.post("http://localhost:8080/myapi/api/client", body, options);
    }
    
}
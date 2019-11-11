import { ClientService } from './../client/client.service';
import { Client } from './../client/client';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadService {
    constructor (private _httpService: Http,
        private otherService: ClientService){}

    getClient(clientId: string) : Observable<Client> {
        return this._httpService.get("http://localhost:8080/myapi/api/client/" + clientId)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

}
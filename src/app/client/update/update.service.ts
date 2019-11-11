import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Client } from '../client';


@Injectable()
export class UpdateService {

    constructor(private _httpServicee: Http){
      }

    updateClient(client: Client) {
        let body = JSON.stringify(client);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpServicee.put("http://localhost:8080/myapi/api/client/"+client.id, body, options);
    }

    // getServer(clientId: string): Observable<Client> {
    //     return this._httpServicee.get("http://localhost:8080/myapi/api/client/" + clientId)
    //         .map((response: Response) => response.json())
    //         .catch(this.handleError);
    // }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}
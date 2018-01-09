import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  storeServer(servers: any[]){
    return this.http.post('https://angular-http-test-2e670.firebaseio.com/data.json', servers);
  }
 


}

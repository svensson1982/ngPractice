import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetdataService {

  constructor(private http: HttpClient) { }

  loadData(url): Observable<any>{
    return this.http
             .get(url);
             /*.map((response: Response) => {
                 return console.log(response);
             })*/
             //.catch('');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }

  postNinja(title, gold_amount) {
    return this._http.post(`/ninjas`, title, gold_amount);
  }

  getNinja() {
    return this._http.get('/ninjas');
  }
}

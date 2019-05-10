import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  getNotes() {
    return this._http.get('/notes');
  }
  createNote(data) {
    console.log('data on server: ', data);
    return this._http.post('/notes', data);
  }
}

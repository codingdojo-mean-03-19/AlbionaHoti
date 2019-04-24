import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask();
   }

   getTasks() {
     return this._http.get('/tasks');
   }

   getOneTask() {
     return this._http.get('/tasks/5cbef03cb5de1bdbdc40fc8a');
   }
  
}

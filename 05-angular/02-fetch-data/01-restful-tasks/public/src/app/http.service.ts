import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.getOneTask();
   }

   getTasks() {
     let tempObservable = this._http.get('/tasks');
     tempObservable.subscribe(data => console.log("Got our tasks: ", data));
   }

  //  getOneTask() {
  //    let tempObersvable = this._http.get('/tasks/:id');
  //    tempObersvable.subscribe(data => console.log("Got our task: ", data));
  //  }
  
}

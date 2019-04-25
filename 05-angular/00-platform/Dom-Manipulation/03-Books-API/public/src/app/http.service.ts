import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getAuthors();
   }

   getAuthors() {
    //  let authors = 

     return this._http.get('/authors');;
    //  authors.subscribe(data => console.log('All Authors: ', data));
   }

  //  getAuthor() {
  //    let author = this._http.get('/author/')
  //  }

  postToServer(num) {
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server
    return this._http.post('/authors', num);
  }
}

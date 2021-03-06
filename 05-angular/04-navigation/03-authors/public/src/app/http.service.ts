import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  createAuthor(author) {
    console.log('author:    0', author);
    return this._http.post('/authors', author);
  }

  getAuthors() {
    return this._http.get('/authors');
  }

  // tslint:disable-next-line:variable-name
  deleteAuthor(author_id) {
    console.log('Author in service delete: ', author_id);
    return this._http.delete(`/authors/${author_id}`);
  }

  // tslint:disable-next-line:variable-name
  getAuthor(author_id) {
    console.log('lets see in service', author_id);
    return this._http.get('/authors/' + author_id);
  }

  editAuthor(data) {
    // tslint:disable-next-line:variable-name
    const author_id = data._id;
    console.log('lets see in service', data);
    return this._http.put(`/authors/${author_id}`, data);
  }
}

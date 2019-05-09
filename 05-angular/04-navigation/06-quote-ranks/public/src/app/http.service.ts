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

  getQuotes(data) {
    console.log('data in service: ', data);

    return this._http.get(`/quotes/${data}`);
  }

  createQuote(data) {
    // tslint:disable-next-line:variable-name
    const author_id = data._id;
    const quote = data.quotes.slice(-1)[0];
    console.log('authorid: ', author_id, 'quote: ', quote);
    console.log('data to create a quote: ', data);
    console.log('data.quotes.slice(-1)[0]: ', data.quotes.slice(-1)[0]);
    return this._http.post(`/quotes/${author_id}`, quote);
  }

  deleteQuote(data) {
    // tslint:disable-next-line:variable-name
    // tslint:disable-next-line:variable-name
    console.log('quote id to delete: ', data);
    return this._http.delete(`/quotes/${data._id}/${data.author}`);
  }
}

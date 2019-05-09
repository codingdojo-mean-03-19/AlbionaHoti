import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authorsData;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    const authorsObservable = this._httpService.getAuthors();
    authorsObservable.subscribe(data => {
      this.authorsData = data;
      console.log(data);
      console.log(this.authorsData);
    });
  }

  deleteAuthor(data) {
    console.log(data);
    const deleteAuthorObservable = this._httpService.deleteAuthor(data._id);
    deleteAuthorObservable.subscribe(data => {
      console.log('Deleted', data);
      this.getAuthors();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css'],
})
export class ViewQuotesComponent implements OnInit {
  authorid;
  author;
  authorQuotes;
  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('asdsad', params['author_id']);
      this.authorid = params['author_id'];
    });
    const authorObservable = this._httpService.getAuthor(this.authorid);
    authorObservable.subscribe(data => {
      console.log('Author on viewing quotes: ', data);
      this.author = data;
      console.log('AUTHOR ID: ', this.authorid);
    });
    this.viewQuote(this.authorid);
    console.log('authorrrr: ', this.author);
  }

  // tslint:disable-next-line:variable-name
  viewQuote(author_id: number) {
    console.log('Author id for quote: ', author_id);
    const quoteAuthorObservable = this._httpService.getQuotes(this.authorid);
    quoteAuthorObservable.subscribe(data => {
      console.log('all quotes of this author', data);
      this.authorQuotes = data.quotes;
    });
  }

  deleteQuote(data) {
    console.log('quote to delete: data: ', data);
    const deleteQuote = this._httpService.deleteQuote(data);
    deleteQuote.subscribe(data => {
      console.log('##################:-------', data);
    });
  }
}

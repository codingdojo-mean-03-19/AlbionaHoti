import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css'],
})
export class NewQuoteComponent implements OnInit {
  quote = {
    title: '',
    vote: 0,
    author: '',
  };
  authorid;
  author;
  // tslint:disable-next-line:variable-name
  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('Id of params : -', params['author_id']);
      this.authorid = params['author_id'];
    });
    const authorObservable = this._httpService.getAuthor(this.authorid);
    authorObservable.subscribe(data => {
      console.log('Author on adding a new quote: ', data);
      this.author = data;
    });
  }

  addQuote(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Quote on controller: ', this.quote.title);
    console.log('author on quote controlelr: ', this.author);
    this.quote.author = this.authorid;
    this.author.quotes.push(this.quote);

    // for (let i = 0; i < this.author.quotes; i++) {
    //   this.author.quotes[i].author = this.author._id;
    // }
    // this.author.quotes[0].author = this.author._id;
    console.log('dataauthor: ', this.author);
    const quoteObservable = this._httpService.createQuote(this.author);
    quoteObservable.subscribe(data => {
      console.log('quote created: ', data);
      this._router.navigate([`/quotes/${this.author._id}`]);
    });
  }
}

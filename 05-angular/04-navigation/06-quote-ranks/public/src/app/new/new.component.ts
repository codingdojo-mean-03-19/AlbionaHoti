import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  author = {
    name: '',
  };

  constructor(
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {}
  addAuthor(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('add author', this.author.name);
    const authorObservable = this._httpService.createAuthor(this.author);
    authorObservable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/']);
    });
  }
}

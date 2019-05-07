import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  author = {
    name: '',
  };
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}
  addAuthor(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('add author', this.author.name);
    const authorObservable = this._httpService.createAuthor(this.author);
    authorObservable.subscribe(data => {
      console.log(data);
    });
  }
}

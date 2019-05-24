import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'public';
  note = {
    content: '',
  };
  data;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    const noteObservable = this._httpService.getNotes();
    noteObservable.subscribe(data => {
      console.log('Got data: ', data);

      this.data = data;
      this.data.reverse();

      console.log('this.data', this.data);
    });
  }
  addNote(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(this.note);
    const noteObservable = this._httpService.createNote(this.note);
    noteObservable.subscribe(data => {
      console.log('note created: ', data);
      this.getNotes();
    });
  }
}

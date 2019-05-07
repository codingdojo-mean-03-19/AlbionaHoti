import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editId: number;
  authorData;
  data = {
    name: '',
  };
  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.editId = params['id'];
    });

    const authorObservable = this._httpService.getAuthor(this.editId);
    authorObservable.subscribe(data => {
      console.log('data ehre with id', data);
      this.authorData = data;
      console.log('author data ', this.authorData);
    });
  }

  editAuthor(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('heeeeeeeee', this.authorData);
    const editAuthorObservable = this._httpService.editAuthor(this.authorData);
    editAuthorObservable.subscribe(data => {
      console.log('edited data: ', data);
    });
  }
}

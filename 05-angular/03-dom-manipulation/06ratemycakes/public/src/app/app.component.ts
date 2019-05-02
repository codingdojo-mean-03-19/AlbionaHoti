import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cake, Comment } from './models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Rate my cake';
  newTask: any;
  cake = new Cake();
  cakes: Cake[] = [];
  comment = new Comment();
  comments: Comment[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getCakes();
  }

  onRegister(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('Submit', this.cake);
    // const comment = {
    //   content: this.cake.comments,
    // };
    // let val = comment.content;
    // val = this.cake.comments;

    // this.cake.comments = [{this.cake.comments}];

    console.log('Commmm-- this.cakes.comments', this.cake);
    console.log('Commmm-- this.cakes.comments SECOND', this.cakes);
    this.comment.cake = this.cake._id;
    this.cakes.push(this.cake);
    this.registerCake(this.cake);

    this.getCakes();
    this.cake = new Cake();
    console.log('cakes: ', this.cakes);
    form.reset();
  }

  onCommentRegister(event: Event, formm: NgForm) {
    event.preventDefault();
    console.log('Submit comment', this.comment.cake);

    this.comment = this.comment;
    console.log('Submit comment second', this.comment);

    // const commentObservable = this._httpService.registerComment(this.comment);
    // commentObservable.subscribe(data => {
    //   console.log('Comment registered: ', data);
    // });
  }
  getCakes() {
    const tasks_observable = this._httpService.getCakes();
    tasks_observable.subscribe(data => {
      this.cakes = data['cakes'];
      console.log('Got our data - : ', data);
      console.log('Got our data into tasks array - : ', this.cakes);
    });
  }

  registerCake(cake) {
    console.log('CAKE ------------', cake);
    const cakeObservable = this._httpService.registerCake({ cake });
    cakeObservable.subscribe(data => {
      console.log('Register data: ', data);
    });
  }

  getEditTask(id) {
    console.log('Edit task: ', id);
    // this.getTasks();
    // const taskObservable = this._httpService.getTask(id);
    // taskObservable.subscribe(data => {
    //   console.log('Got one data for edit: ', data);
    //   this.edit = true;
    //   this.editingTask = data.task;

    //   console.log('Editing task: ', this.editingTask);
    // });
  }
}

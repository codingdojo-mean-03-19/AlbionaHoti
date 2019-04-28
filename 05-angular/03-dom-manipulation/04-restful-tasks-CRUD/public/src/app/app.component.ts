import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CRUD Restful';
  newTask: any;
  task = new Task();
  editTask = new Task();
  tasks: Task[] = [];
  edit = false;
  editingTask: object;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasks();
  }

  onRegister(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('Submit', this.task);

    this.tasks.push(this.task);
    const taskkk = this.task;
    this.registerTask(this.task);
    this.task = new Task();
    console.log('tasks: ', this.tasks);
    form.reset();
  }

  getTasks() {
    const tasks_observable = this._httpService.getTasks();

    tasks_observable.subscribe(data => {
      this.tasks = data['tasks'];
      console.log('Got our data - : ', data);
      console.log('Got our data into tasks array - : ', this.tasks);
    });
  }

  registerTask(task) {
    console.log('TASK ------------', task);
    const task_obervable = this._httpService.registerTask({ task });
    task_obervable.subscribe(data => {
      console.log('Register data: ', data);
    });
  }

  getEditTask(id) {
    console.log('Edit task: ', id);
    const taskObservable = this._httpService.getTask(id);
    taskObservable.subscribe(data => {
      console.log('Got one data for edit: ', data);
      this.edit = true;
      this.editingTask = data.task;
      console.log('Editing task: ', data.task);
    });
  }

  onEditing(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('Submit edit task', this.editTask);

    this.updateTask(this.editingTask);

    // this.editTask = this.editingTask;

    // this.editTask = new Task();
    console.log('EDIT task: ', this.editingTask);

    // form.reset();
  }

  updateTask(editTask) {
    console.log('EDIT TASK: ', editTask);
    const editObservable = this._httpService.editTask({ editTask });
    editObservable.subscribe(data => {
      console.log('IT WORKED WE EDIT IT: ', data);
    });
  }
}

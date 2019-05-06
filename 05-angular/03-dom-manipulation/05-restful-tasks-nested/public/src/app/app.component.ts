import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dom Manipulation first restful API';
  tasks = [];
  task = {};
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}

  getTasks() {
    const tasksObservable = this._httpService.getTasks();
    tasksObservable.subscribe(data => {
      this.tasks = data['tasks'];
      console.log('Got our data - tasks: ', data);
      console.log('Got our data - ', this.tasks);
    });
  }

  getDetails(num: number): void {
    console.log(`The id that you clicked on is: ${num}`);
    let taskObservable = this._httpService.getOneTask(num);
    taskObservable.subscribe(data => {
      this.task = data['task'];
      console.log('Got our data - task: ', this.task);
    });
  }
}

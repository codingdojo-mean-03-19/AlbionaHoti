import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dom Manipulation first restful API';
  tasks = [];
  task = {};
  constructor(private _httpService: HttpService) {
    
  }

  ngOnInit() {
  }

  getTasks() {
    let tasks_observable = this._httpService.getTasks();
    tasks_observable.subscribe(data => {
      this.tasks = data['tasks'];
      console.log("Got our data - tasks: ", data);
      console.log("Got our data - ", this.tasks);
    })    
  }

  getDetails(num: Number): void {

    console.log(`The id that you clicked on is: ${num}`);
    let task_observable = this._httpService.getOneTask(num);
    task_observable.subscribe(data => {
      this.task = data['task'];
      console.log("Got our data - task: ", this.task);
    })
  }
}

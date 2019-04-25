import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  snacks: string[];
  loggedIn: boolean;
  title: string;

  constructor(private _httpService: HttpService){
      
  }

  ngOnInit(){
    this.title = "Dom Manipulation"
    this.num = 7;
    this.randNum = Math.floor((Math.random() * 2) + 1);
    this.str = "Hello Angular Developer!";
    this.first_name = "Alpha";
    this.snacks = ["Vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
  }

  do(event) {
    console.log(event);
  }

  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
  }
}

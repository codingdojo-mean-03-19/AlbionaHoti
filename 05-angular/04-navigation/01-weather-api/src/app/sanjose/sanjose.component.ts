import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css'],
})
export class SanjoseComponent implements OnInit {
  data: any;

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    const weatherObservable = this._httpService.getWeather('sanjose');
    weatherObservable.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

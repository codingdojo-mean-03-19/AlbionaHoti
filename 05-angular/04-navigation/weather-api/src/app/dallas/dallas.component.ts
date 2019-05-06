import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css'],
})
export class DallasComponent implements OnInit {
  data: any;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    const weatherObservable = this._httpService.getWeather('dallas');
    weatherObservable.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
})
export class SeattleComponent implements OnInit {
  data: any;

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    const weatherObservable = this._httpService.getWeather('seattle');
    weatherObservable.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
})
export class ChicagoComponent implements OnInit {
  data: any;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    const weatherObservable = this._httpService.getWeather('chicago');
    weatherObservable.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

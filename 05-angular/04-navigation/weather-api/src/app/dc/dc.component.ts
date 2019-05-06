import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css'],
})
export class DcComponent implements OnInit {
  data: any;

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    const weatherObservable = this._httpService.getWeather('dc');
    weatherObservable.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

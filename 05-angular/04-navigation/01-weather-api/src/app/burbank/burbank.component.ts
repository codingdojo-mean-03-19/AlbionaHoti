import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
})
export class BurbankComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {}
  data: any;
  ngOnInit() {
    const weatherObservable = this._httpService.getWeather('burbank');
    weatherObservable.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

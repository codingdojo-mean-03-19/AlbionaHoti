import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'api.openweathermap.org/data/2.5/weather?';
  apiKey = '2d824695c7d644a0d92d64ad75c94628';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  getWeather(data) {
    console.log(data);
    return this._http.get(`${this.baseUrl}q=${data}&APPID=${this.apiKey}`);
  }
}

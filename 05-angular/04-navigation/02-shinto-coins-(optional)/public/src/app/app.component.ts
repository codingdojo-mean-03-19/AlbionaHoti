import { Component, OnInit } from '@angular/core';
import { ShintoService } from './shinto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'public';
  shinto = 0;
  // tslint:disable-next-line:variable-name
  constructor(private _shintoService: ShintoService) {}

  ngOnInit() {
    const one = this._shintoService.getShintoCoin();
    this.shinto = one;

    console.log('IBEEEE', one);
  }
}

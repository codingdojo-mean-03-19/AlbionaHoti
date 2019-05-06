import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sellcoins',
  templateUrl: './sellcoins.component.html',
  styleUrls: ['./sellcoins.component.css'],
})
export class SellcoinsComponent implements OnInit {
  shintoCoin: number;
  coins = {
    value: 0,
  };

  // tslint:disable-next-line:variable-name
  constructor(private _shintoService: ShintoService) {}

  ngOnInit() {
    const data = this._shintoService.getShintoCoin();
    console.log('data', data);
    this.shintoCoin = data;
  }

  onSell(event: Event, form: NgForm) {
    console.log(this.coins.value);
    this._shintoService.sellShintonCoin(this.coins.value);
  }
}

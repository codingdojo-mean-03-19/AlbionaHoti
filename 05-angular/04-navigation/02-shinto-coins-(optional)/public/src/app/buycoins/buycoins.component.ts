import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buycoins',
  templateUrl: './buycoins.component.html',
  styleUrls: ['./buycoins.component.css'],
})
export class BuycoinsComponent implements OnInit {
  shintoCoins;

  coins = {
    value: 0,
  };
  // tslint:disable-next-line:variable-name
  constructor(private _shintoService: ShintoService) {}

  ngOnInit() {
    const shinto = this._shintoService.getShintoCoin();
    console.log('asdasdas', shinto);
    this.shintoCoins = shinto;
  }

  onBuy(event: Event, form: NgForm) {
    console.log('value on buy :', this.coins.value);
    // let coin = this._shintoService.getShintoCoin();
    this._shintoService.saveShintoCoint(this.coins.value);
  }
}

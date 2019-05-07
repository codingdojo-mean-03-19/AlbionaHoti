import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-prolist',
  templateUrl: './prolist.component.html',
  styleUrls: ['./prolist.component.css'],
})
export class ProlistComponent implements OnInit {
  products;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const productsObservable = this._httpService.getProducts();
    productsObservable.subscribe(data => {
      console.log('Got all data: ', data);
      this.products = data;
    });
  }

  deleteProduct(data) {
    console.log('data to delete: ', data);
    const prodToDelete = this._httpService.deleteProduct(data);
    prodToDelete.subscribe(data => {
      console.log('data deleted', data);

      this.getProducts();
    });
  }
}

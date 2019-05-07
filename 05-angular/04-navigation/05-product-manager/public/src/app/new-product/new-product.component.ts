import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  product = {
    title: '',
    price: 0,
    image_url: '',
  };
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {}

  addProduct(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('add product', this.product);
    const prodObservable = this._httpService.createProduct(this.product);
    prodObservable.subscribe(data => {
      console.log('data created: ', data);
      this._router.navigate(['/products']);
    });
  }
}

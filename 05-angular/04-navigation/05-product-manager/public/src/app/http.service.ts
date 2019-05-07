import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  createProduct(data) {
    console.log('data', data);
    return this._http.post('/products', data);
  }

  getProducts() {
    return this._http.get('/products');
  }

  // tslint:disable-next-line:variable-name
  getProduct(product_id) {
    console.log('product id on service: ', product_id);
    return this._http.get(`/products/${product_id}`);
  }

  updateProduct(data) {
    // tslint:disable-next-line:variable-name
    const product_id = data._id;
    return this._http.put(`/products/${product_id}`, data);
  }

  // tslint:disable-next-line:variable-name
  deleteProduct(product_id) {
    // tslint:disable-next-line:variable-name
    return this._http.delete(`/products/${product_id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { ProlistComponent } from '../prolist/prolist.component';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product = {
    title: '',
    price: 0,
    image_url: '',
  };
  data;
  editId: number;
  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.editId = params['id'];

      const productObservable = this._httpService.getProduct(this.editId);
      productObservable.subscribe(data => {
        console.log('data from server', data);
        this.data = data;
      });
    });
  }

  editProduct(evemt: Event, form: NgForm) {
    event.preventDefault();
    console.log('product on edit: ', this.data);
    const editProduct = this._httpService.updateProduct(this.data);
    editProduct.subscribe(data => {
      console.log('data updated: ', data);

      this._router.navigate(['/products']);
    });
  }

  deleteProduct(data) {
    console.log('data to delete: ', data);
    const prodToDelete = this._httpService.deleteProduct(data);
    prodToDelete.subscribe(data => {
      console.log('data deleted', data);

      this._router.navigate(['/products']);
    });
  }
}

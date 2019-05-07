import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';

import { NewProductComponent } from './new-product/new-product.component';

import { EditProductComponent } from './edit-product/edit-product.component';
import { ProlistComponent } from './prolist/prolist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      { path: '', component: ProlistComponent },
      { path: 'new', component: NewProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

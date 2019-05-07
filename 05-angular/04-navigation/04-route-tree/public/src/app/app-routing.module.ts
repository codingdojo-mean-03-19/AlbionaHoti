import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: 'reviews',
    component: ReviewsComponent,
    children: [
      { path: 'details/:id', component: ReviewDetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllReviewsComponent },
    ],
  },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: 'details/:ud', component: ProductDetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

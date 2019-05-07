import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ProlistComponent } from './prolist/prolist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewProductComponent,
    EditProductComponent,
    HomeComponent,
    ProlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

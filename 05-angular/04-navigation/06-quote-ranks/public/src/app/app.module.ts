import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HomeComponent,
    EditComponent,
    ViewQuotesComponent,
    NewQuoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

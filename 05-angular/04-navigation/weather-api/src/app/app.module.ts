import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';

@NgModule({
  declarations: [AppComponent, SanjoseComponent, DcComponent, SeattleComponent, DallasComponent, ChicagoComponent, BurbankComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

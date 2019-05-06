import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ShintoService } from './shinto.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';

@NgModule({
  declarations: [AppComponent, MinecoinsComponent, BuycoinsComponent, SellcoinsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ShintoService],
  bootstrap: [AppComponent],
})
export class AppModule {}

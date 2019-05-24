import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';

import { PlayerService } from './services';
import { PlayerStatusComponent } from './player-status/player-status.component';

@NgModule({
  declarations: [AppComponent, ListComponent, AddplayerComponent, PlayerStatusComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';

import { PlayerStatusComponent } from './player-status/player-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: 'players',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'addplayer',
        component: AddplayerComponent,
      },
    ],
  },
  {
    path: 'status',
    redirectTo: 'status',
    pathMatch: 'full',
  },
  {
    path: 'status',
    children: [
      {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full',
      },
      {
        path: 'game/1',
        component: PlayerStatusComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

import { Player, Game } from '../models';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css'],
})
export class PlayerStatusComponent implements OnInit {
  players: Player[] = [];
  game: Game;
  status = 'Undecided';
  statuses = ['Playing', 'Not Playing', 'Undecided'];

  constructor(private readonly playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  setPlayers() {
    console.log('in set Players', this.status);
    this.playerService.updateStatusPlayers(this.status).subscribe(players => {
      console.log('got all players updated: ', players);

      this.getPlayers();
    });
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => {
      console.log('Got all players: ', players);

      this.players = players;
    });
  }

  changeStatus(status: string, id: string, stat: string) {
    console.log('status: ', status);
    console.log('id: ', id);
    if (status === 'NotPlayingOf' && stat === 'NotPlayingOf') {
      status = 'NotPlayingOn';
    } else if (status === 'NotPlayingOn') {
      status = 'NotPlayingOf';
    } else if (stat === 'PlayingOn') {
      status = 'PlayingOn';
    }

    this.playerService.updateStatus(status, id).subscribe(player => {
      console.log('edited player', player);

      this.getPlayers();
    });
  }
}

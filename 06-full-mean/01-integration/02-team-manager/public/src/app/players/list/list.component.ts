import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services';
import { Router } from '@angular/router';
import { Player } from '../../models';

import * as $ from 'jquery';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private readonly playerService: PlayerService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => {
      console.log('Got all players: ', players);

      this.players = players;
    });
  }

  onDelete(id: string) {
    console.log('got id: ', id);
    this.playerService.removePlayer(id).subscribe(() => {
      console.log('deleted player');

      this.getPlayers();
    });
  }

  showModal() {
    $('.modal').addClass('is-active');
  }

  closeModal() {
    $('.modal').removeClass('is-active');
  }
}

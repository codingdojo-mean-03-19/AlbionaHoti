import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PlayerService } from '../../services';

import { Player } from '../../models';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css'],
})
export class AddplayerComponent implements OnInit {
  player = new Player();

  constructor(
    private readonly playerService: PlayerService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitting form: ', this.player);

    this.playerService.createPlayer(this.player).subscribe(player => {
      console.log('creating player: ', player);
      this.router.navigateByUrl('/players');
    });
  }
}

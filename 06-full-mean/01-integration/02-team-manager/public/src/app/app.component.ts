import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'public';

  constructor(
    private readonly playerService: PlayerService,
    private readonly router: Router
  ) {}

  addPlayer(): void {
    this.router.navigate(['addplayer']);
  }
}

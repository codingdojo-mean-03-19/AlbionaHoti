import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Player } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly base = '/api';

  constructor(private readonly http: HttpClient) {}

  createPlayer(player: Player): Observable<Player> {
    console.log('player: ', player);
    return this.http.post<Player>(`${this.base}/players`, player);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.base}/players`);
  }

  removePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/players/${id}`);
  }

  updateStatusPlayers(status: string): Observable<Player[]> {
    console.log('in update status player: ', status);
    return this.http.put<Player[]>(`${this.base}/status/${status}`, status);
  }

  updateStatus(status, id: string): Observable<Player> {
    console.log('status in service: ', status);
    return this.http.put<Player>(`${this.base}/status/edit/${id}`, {
      status,
    });
  }
}

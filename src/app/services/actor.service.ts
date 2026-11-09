import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actor } from '../domain/actor.domain';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private http = inject(HttpClient); // inyección de HttpClient
  private url:string = environment.API_URL;
 
  actores = this.http.get<Actor[]>(`${this.url}actores`);

  constructor() { }

  getActores() {
    return this.actores;
  }

}

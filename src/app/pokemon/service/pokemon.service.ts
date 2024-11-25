import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetails, PokemonResponse } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  private favorites : PokemonDetails[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  public getPokemonList(limit: number = 20, offset: number = 0): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  get getFavorites():PokemonDetails[]{
    return [...this.favorites];
  }

  // Obtener los detalles de un Pokémon por nombre o ID
  getPokemonDetails(nameOrId: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${nameOrId}`);
  }

  saveFavorite(id: number):void {
    this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${id}`)
    .subscribe(response => {
        this.favorites = this.favorites.filter (pokemon => pokemon.id !== response.id);
        this.favorites.unshift(response)
        this.saveLocalStorage();
    }
    )
  }

  deleteFavorite(id: number):void{
    this.favorites = this.favorites.filter (pokemon => id !== pokemon.id)
    this.saveLocalStorage();
  }

  private saveLocalStorage ():void{
    localStorage.setItem('pokemon', JSON.stringify(this.favorites));
  }

  private loadLocalStorage():void{
    if ( !localStorage.getItem('pokemon')) return;
    this.favorites = JSON.parse( localStorage.getItem('pokemon')! );
  }
}

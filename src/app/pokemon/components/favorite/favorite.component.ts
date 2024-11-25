import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon, PokemonDetails } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'pokemon-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class PokemonFavoriteComponent {

  //pokemonFavorites: Pokemon[] = this.pokemonService.getFavorites;

  @Input() pokemonFavorites: PokemonDetails[] = [];

  constructor (){}

  @Output()
  public onDeleteFavorite: EventEmitter<number> = new EventEmitter();

  public deleteFavorite( id:number ):void{
    this.onDeleteFavorite.emit(id);
  }


}




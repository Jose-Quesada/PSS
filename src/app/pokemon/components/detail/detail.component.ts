import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PokemonDetails } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PokemonDetailComponent  {
  @Input()
  pokemonDetails!: PokemonDetails ;

  @Output()
  favoritePokemon = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) {}

  onFavorite(): void {
    this.favoritePokemon.emit(this.pokemonDetails.id);
  }


}





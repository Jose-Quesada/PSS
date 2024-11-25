import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class PokemonItemComponent {
  @Input() pokemonName: string = '';
  @Output() selectPokemon = new EventEmitter<string>();

  onClick(): void {
    this.selectPokemon.emit(this.pokemonName);

  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from '../../../service/pokemon.service';
import { Pokemon,PokemonDetails } from '../../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  pokemons: Pokemon[] = [];
  selectedPokemonId: string = '';
  pokemonDetails!: PokemonDetails ;


  @ViewChild('numeroPokemon')
  public selectInput!: ElementRef<HTMLSelectElement>;

  constructor(private pokemonService: PokemonService) {}

  // Obtener la lista de Pokémon desde el servicio
  fetchPokemonList(): void {
    if(this.selectInput.nativeElement.value) {
    this.pokemonService.getPokemonList(parseInt(this.selectInput.nativeElement.value, 0)).subscribe(response => {
      this.pokemons = response.results;
      console.log(response.results);
    })} else{
      this.pokemonService.getPokemonList().subscribe(response => {
        this.pokemons = response.results;
        console.log(response.results);
    })
    }
  }

  // Seleccionar un Pokémon y enviar su ID al componente de detalle
  onSelectPokemon(pokemonId: string): void {
    this.selectedPokemonId = pokemonId;

    this.pokemonService.getPokemonDetails(pokemonId).subscribe(response => {
      this.pokemonDetails = response;
    });


  }

  onSaveFavoritePokemon(pokemonId: number):void{
    this.pokemonService.saveFavorite (pokemonId);
  }

  onGetFavoritePokemon():PokemonDetails[]{
    return this.pokemonService.getFavorites;
  }

  searchPokemon():void{
    if (parseInt(this.selectInput.nativeElement.value) !== 0){
    this.pokemonService.getPokemonList(parseInt(this.selectInput.nativeElement.value, 0))
    .subscribe(response =>{
      this.pokemons = response.results;
    })
    } else {
      this.pokemons = [];
    }
  }

  onDeleteFavorite( pokemonIde:number):void{
    this.pokemonService.deleteFavorite(pokemonIde);
  }

}

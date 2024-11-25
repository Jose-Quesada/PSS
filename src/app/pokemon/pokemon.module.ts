import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './components/detail/detail.component';
import { PokemonItemComponent } from './components/item/item.component';
import { PokemonFavoriteComponent } from './components/favorite/favorite.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './components/pages/main-page/main-page.component';



@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonItemComponent,
    PokemonFavoriteComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class PokemonModule { }

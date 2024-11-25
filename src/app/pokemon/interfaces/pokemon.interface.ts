export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
}

export interface PokemonResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  Pokemon[];
}

export interface Result {
  name: string;
  url:  string;
}

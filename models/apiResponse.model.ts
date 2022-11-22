export interface PokeResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  id: number;
  image: string;
  name: string;
  url: string;
}

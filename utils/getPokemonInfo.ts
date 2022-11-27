import { pokeApi } from "../api";
import { Pokemon } from "../models/pokemon.model";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
  return data;
};

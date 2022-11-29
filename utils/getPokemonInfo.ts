import { pokeApi } from "../api";
import { Pokemon } from "../models/pokemon.model";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    const { id, name, sprites, types, weight, height, stats } = data;
    return { id, name, sprites, types, weight, height, stats };
  } catch (error) {
    return null;
  }
};

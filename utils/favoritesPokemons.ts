//import { Pokemon } from "../models/pokemon.model";
import { getLocalStorage, setLocalStorage } from "./localStorage.util";

const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(getLocalStorage("favorites") || "[]");

  if (favorites.some((favorite) => favorite === id)) {
    favorites = favorites.filter((favorite) => favorite !== id);
  } else {
    favorites.push(id);
  }

  setLocalStorage("favorites", favorites);
};

const isPokemonInFavorites = (id: number): boolean =>
  JSON.parse(getLocalStorage("favorites") || "[]").some(
    (favorite: number) => favorite === id
  );

export default {
  toggleFavorite,
  isPokemonInFavorites,
};

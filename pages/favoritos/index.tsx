import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "../../Components/layouts";
import FavoriteListPokemon from "../../Components/pokemon/favorites/FavoriteListPokemon";
import { NotFavorites } from "../../Components/ui";
import { getLocalStorage } from "../../utils/localStorage.util";

type Props = {};

const FavoritesPage = (props: Props) => {
  const [pokemonsId, setPokemonsId] = useState<number[]>([]);
  useEffect(() => {
    const favoritePokemons: number[] = getLocalStorage("favorites")
      ? JSON.parse(getLocalStorage("favorites") || "[]")
      : [];

    setPokemonsId(favoritePokemons);
  }, []);

  return (
    <Layout title="Sección de pokemons favoritos" padding>
      {pokemonsId.length ? (
        <FavoriteListPokemon pokemonsId={pokemonsId} />
      ) : (
        <NotFavorites />
      )}
    </Layout>
  );
};

export default FavoritesPage;

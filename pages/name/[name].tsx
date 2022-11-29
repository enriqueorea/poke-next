import React, { useState, useEffect } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import confetti from "canvas-confetti";

import { Layout } from "../../Components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from "../../models/pokemon.model";
import { getPokemonInfo, localFavorites } from "../../utils";
import { PokeResponse } from "../../models/apiResponse.model";
import { PokemonDetails } from "../../Components/pokemon";

type Props = {
  pokemon: Pokemon;
};

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const isFavorite = localFavorites.isPokemonInFavorites(pokemon.id);
    setIsFavorite(isFavorite);
  }, []);

  const handleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 0.1, y: 0.5 },
    });
  };
  const bgType = `bgPoke-${pokemon?.types[0]?.type.name}`;
  return (
    <Layout title={pokemon?.name}>
      <PokemonDetails
        pokemon={pokemon}
        bgType={bgType}
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokeResponse>("/pokemon?limit=151");
  const pokemonNamePaths: string[] = data.results.map(
    (pokemon) => pokemon.name
  );
  return {
    paths: pokemonNamePaths.map((name) => ({ params: { name } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400, // 24 hours
  };
};

export default PokemonByNamePage;

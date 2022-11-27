import React, { useState, useEffect } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import confetti from "canvas-confetti";

import { Layout } from "../../Components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from "../../models/pokemon.model";
import { getPokemonInfo, localFavorites } from "../../utils";
import { PokemonDetails } from "../../Components/pokemon";

type Props = {
  pokemon: Pokemon;
};

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false);

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
  const pokemonsPaths: string[] = [...Array(151)].map(
    (value, index) => `${index + 1}`
  );
  return {
    paths: pokemonsPaths.map((id) => ({ params: { id } })),
    // paths: [
    //   {
    //     params: {
    //       id: "1",
    //     },
    //   },
    // ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};

export default PokemonPage;

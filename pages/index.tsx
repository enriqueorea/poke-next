import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../Components/layouts";
import { PokemonList } from "../Components/pokemon";
import { PokeResponse, SmallPokemon } from "../models/apiResponse.model";
import { Pokemon } from "../models/pokemon.model";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons Main List">
      <>
        <h1>Next.js + TypeScript Pokemon</h1>
        <PokemonList pokemons={pokemons} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    data: { results },
  } = await pokeApi.get<PokeResponse>("/pokemon?limit=151");

  // const pokePromises = results.map(async (pokemon) => {
  //   const {
  //     data: {
  //       id,
  //       sprites: {
  //         other: {
  //           dream_world: { front_default },
  //         },
  //       },
  //     },
  //   } = await axios.get<Pokemon>(pokemon.url);

  //   return { ...pokemon, id, image: front_default };
  // });

  // const pokemons: SmallPokemon[] = await Promise.all(pokePromises);

  const pokemons: SmallPokemon[] = results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

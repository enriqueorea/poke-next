import React from "react";
import { Layout } from "../../Components/layouts";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Pokemon } from "../../models/pokemon.model";
import Image from "next/image";

type Props = {
  pokemon: Pokemon;
};

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const bgType = `bgPoke-${pokemon?.types[0]?.type.name}`;
  return (
    <div
      className={`${bgType} px-[3%] flex justify-center items-center flex-col w-full h-[100vh]  `}
    >
      <div className="w-full mt-10 relative z-50">
        <h3 className="text-5xl font-bold drop-shadow-lg shadow-black">
          #{pokemon.id}
        </h3>
        <h2 className="text-8xl font-bold drop-shadow-lg shadow-black">
          {pokemon.name}
        </h2>
      </div>
      <div className="flex items-center justify-center gap-10 w-full mt-10">
        <div className="flex-[.5]">
          <p className="text-3xl drop-shadow-lg shadow-black">
            <strong>Weight</strong>: {pokemon.weight}
          </p>
          <p className="text-3xl drop-shadow-lg shadow-black">
            <strong>Height</strong>: {pokemon.height}
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center max-w-[100%]">
          <Image
            style={{
              maxHeight: "50%",
              objectFit: "contain",
              width: "100%",
              inset: "unset",
            }}
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            fill
          />
        </div>
        <div className="flex-[.5]">
          <h3 className="text-6xl font-bold drop-shadow-lg shadow-black">
            Base Stats:
          </h3>
          <div className="flex flex-wrap gap-3  border-l-4 border-slate-300 pl-4 mt-10">
            {pokemon.stats.map((stat, index) => (
              <div
                className="bg-slate-300 px-2 py-1 rounded-xl drop-shadow-xl"
                key={index}
              >
                <p className="capitalize text-gray-500">{`${stat.stat.name}: ${stat.base_stat}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { FC } from "react";
import { Pokemon } from "../../models/pokemon.model";
import { HeartIcon } from "../svg";

type Props = {
  pokemon: Pokemon;
  bgType: string;
  isFavorite: boolean;
  handleFavorite: () => void;
};

const PokemonDetails: FC<Props> = ({
  pokemon,
  bgType,
  isFavorite,
  handleFavorite,
}) => {
  return (
    <div
      className={`${bgType} px-[3%] flex justify-center items-center flex-col w-full h-[100vh]  `}
    >
      <div className="w-full mt-10 relative">
        <h3 className="text-5xl font-bold drop-shadow-lg shadow-black">
          #{pokemon.id}
        </h3>
        <h2 className="text-8xl font-bold drop-shadow-lg shadow-black">
          {pokemon.name}
        </h2>

        <Button
          css={{ position: "relative", zIndex: 51 }}
          onPress={() => handleFavorite()}
          auto
          color="error"
          icon={<HeartIcon fill={isFavorite ? "red" : "white"} filled />}
        />
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

export default PokemonDetails;

import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { SmallPokemon } from "../../models/apiResponse.model";
import PokemonCard from "./PokemonCard";

type Props = {
  pokemons: SmallPokemon[];
};

const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={3} justify="flex-start">
      {pokemons.map((pokemon) => (
        <Grid xs={6} sm={3} md={2} xl={2} key={pokemon.id}>
          <PokemonCard
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.image}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default PokemonList;

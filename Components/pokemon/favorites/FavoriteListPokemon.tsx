import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import FavoritePokemonCard from "./FavoritePokemonCard";

type Props = {
  pokemonsId: number[];
};

const FavoriteListPokemon: FC<Props> = ({ pokemonsId }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsId.map((id) => (
        <FavoritePokemonCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoriteListPokemon;

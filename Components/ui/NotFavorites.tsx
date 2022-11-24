import { Container, Image, Text } from "@nextui-org/react";
import React, { FC } from "react";

type Props = {};

const NotFavorites: FC = (props: Props) => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <Text h1>No hay pokemons favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
        width={250}
        height={200}
        alt="Pokemon"
      />
    </Container>
  );
};

export default NotFavorites;

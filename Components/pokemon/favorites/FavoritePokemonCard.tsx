import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  id: number;
};

const FavoritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleClick = () => router.push(`/pokemon/${id}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card onPress={handleClick} isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Favorite Pokemon"
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoritePokemonCard;

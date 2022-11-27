import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  id: number;
  name: string;
  image: string;
};

const PokemonCard: FC<Props> = ({ id, name, image }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/name/${name}`);
  };
  return (
    <Card onClick={handleClick} isHoverable isPressable>
      <Card.Body>
        <Card.Image src={image} alt={name} width="100%" height={140} />
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;

import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  //this hook is used to get the current theme
  //const { theme, isDark } = useTheme();
  return (
    <div className="flex w-full items-center justify-start px-[30px] py-[20px] bg-gray-900 ">
      <div className="w-[70px] h-[70px] rounded-full mr-6 bg-purple-600 flex items-center justify-center">
        <Image
          className="rounded-full"
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
          }
          width={60}
          height={60}
          alt="Pokemon"
        />
      </div>

      <Text
        h1
        size={35}
        weight="bold"
        css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }}
      >
        Pokemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text>Favoritos</Text>
    </div>
  );
};

export default Navbar;

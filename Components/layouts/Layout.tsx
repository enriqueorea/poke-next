import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: React.ReactNode;
  title?: string;
  padding?: boolean;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<Props> = ({ children, title, padding }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp "}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Enrique Orea" />
        <meta name="description" content="Next.js + TypeScript Pokemon" />
        <meta name="keywords" content="Next.js, TypeScript, Pokemon" />
        <meta property="og:title" content="How to Become an Pokemon Master?" />
        <meta property="og:description" content="Check All pokemons details" />
        <meta property="og:image" content={`${origin}/pokemon.jpeg`} />
      </Head>
      <Navbar />
      <main className={padding ? "px-[3%]" : ""}>{children}</main>
    </>
  );
};

export default Layout;

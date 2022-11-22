import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp "}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Enrique Orea" />
        <meta name="description" content="Next.js + TypeScript Pokemon" />
        <meta name="keywords" content="Next.js, TypeScript, Pokemon" />
      </Head>
      <Navbar />
      <main className="px-[3%]">{children}</main>
    </>
  );
};

export default Layout;

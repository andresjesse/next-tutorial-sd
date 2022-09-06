import { GetStaticProps } from "next";

import { prisma } from "../lib/prisma";
import { Brand } from "@prisma/client";

interface BrandsProps {
  brands: Array<Brand>;
}

export default function Brands({ brands }: BrandsProps) {
  return (
    <div>
      <h1>Brands Available</h1>
      <br />

      {brands.map((brand, index) => (
        <div key={index}>
          <span>{brand.id}</span>
          <span>{brand.name}</span>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const brands = await prisma.brand.findMany();

  return {
    props: {
      brands,
    },
    revalidate: 10,
  };
};

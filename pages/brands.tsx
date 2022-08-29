import { GetStaticProps } from "next";

interface BrandsProps {
  brands: Array<string>;
}

export default function Brands({ brands }: BrandsProps) {
  return (
    <div>
      <h1>Brands Available</h1>
      <br />

      {brands.map((brand, index) => (
        <div key={index}>{brand}</div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const brands = ["Dell", "Lenovo", "Acer", Math.random().toString()];

  return {
    props: {
      brands,
    },
    revalidate: 10,
  };
};

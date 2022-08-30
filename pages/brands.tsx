import { GetStaticProps } from "next";
import { fakeBrands, TBrand } from "../services/fakeData";

interface BrandsProps {
  brands: Array<TBrand>;
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
  const brands = fakeBrands;

  return {
    props: {
      brands,
    },
    revalidate: 10,
  };
};

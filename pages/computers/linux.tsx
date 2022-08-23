import { GetStaticProps } from "next";
import React from "react";

type Props = {
  data: Array<string>;
};

export default function Linux({ data }: Props) {
  return (
    <div>
      <h1>Linux</h1>

      {data.map((computer) => {
        return (
          <>
            <span>{computer}</span>
            <br />
          </>
        );
      })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: ["Dell", "Lenovo", "Acer", "Positivo"],
    },
  };
};

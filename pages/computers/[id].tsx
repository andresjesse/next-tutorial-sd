import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { fakeComputers, TComputer } from "../../services/fakeData";

interface ComputerProps {
  data: TComputer;
}

export default function Computer({ data }: ComputerProps) {
  return (
    <div>
      <span>id: {data.id} </span>
      <br />
      <span>cpu: {data.cpu} </span>
      <br />
      <span>ram: {data.ram}GB </span>
      <br />
      <span>storage: {data.storage} </span>
      <br />
      <span>
        price: <b>R${data.price}</b>{" "}
      </span>
      <br />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const selectedComputer = fakeComputers.filter(
    (computer) => computer.id.toString() === id
  )[0];

  return {
    props: { data: selectedComputer },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const computers = fakeComputers;

  const paths = computers.map((computer) => ({
    params: { id: computer.id.toString() },
  }));

  return { paths, fallback: false };
};

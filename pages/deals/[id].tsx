import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { fakeComputers, TComputer } from "../../services/fakeData";

interface ComputerProps {
  data: TComputer;
}

export default function Deals({ data }: ComputerProps) {
  return (
    <div>
      <h1>Special Deal!</h1>
      <span>id: {data.id} </span>
      <br />
      <span>cpu: {data.cpu} </span>
      <br />
      <span>ram: {data.ram}GB </span>
      <br />
      <span>storage: {data.storage} </span>
      <br />
      <span>
        price: <b>R${data.price.toFixed(2)}</b>{" "}
      </span>
      <br />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  let selectedComputer = fakeComputers.filter(
    (computer) => computer.id.toString() === id
  )[0];

  selectedComputer = { ...selectedComputer };

  selectedComputer.price =
    selectedComputer.price - selectedComputer.price * Math.random() * 0.15;

  return {
    props: {
      data: selectedComputer,
    },
  };
};

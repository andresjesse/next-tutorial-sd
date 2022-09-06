import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { prisma } from "../../lib/prisma";
import { Brand, Computer } from "@prisma/client";

interface ComputerProps {
  data: Computer & { brand: Brand };
}

export default function Deals({ data }: ComputerProps) {
  const { brand } = data;

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
      <h2>Brand:</h2>
      <span>{brand.name}</span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const idNumber = parseInt(id as string);

  const selectedComputer = await prisma.computer.findUnique({
    where: {
      id: idNumber,
    },
    include: {
      brand: true,
    },
  });

  if (selectedComputer) {
    selectedComputer.price =
      selectedComputer.price - selectedComputer.price * Math.random() * 0.15;
  }

  return {
    props: {
      data: selectedComputer,
    },
  };
};

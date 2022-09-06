import { Computer } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
// import { fakeComputers, TComputer } from "../../services/fakeData";
import { prisma } from "../../lib/prisma";

interface ComputerProps {
  data: Computer;
}

export default function PageComputer({ data }: ComputerProps) {
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
  // const id = params?.id;
  const id = parseInt(params?.id as string);

  // const selectedComputer = fakeComputers.filter(
  //   (computer) => computer.id.toString() === id
  // )[0];
  const selectedComputer = await prisma.computer.findUnique({
    where: {
      id: id,
    },
  });

  return {
    props: { data: selectedComputer },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const computers = fakeComputers;
  const computers = await prisma.computer.findMany();

  const paths = computers.map((computer) => ({
    params: { id: computer.id.toString() },
  }));

  return { paths, fallback: false };
};

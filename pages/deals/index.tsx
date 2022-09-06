import { Brand } from "@prisma/client";
import { Typography } from "antd";
import { GetStaticProps } from "next";
import { prisma } from "../../lib/prisma";

const { Link, Text } = Typography;

type ComputerSummary = {
  brand: Brand;
  id: number;
};

interface ComputerProps {
  computers: ComputerSummary[];
}

export default function PageComputer({ computers }: ComputerProps) {
  return (
    <div>
      {computers.map((computer) => {
        return (
          <Link href={`/deals/${computer.id}`} key={computer.id}>
            <Text type="danger">Deal!!</Text>
            <span>id: {computer.id} </span>
            <span>brand: {computer.brand.name}</span>
            <br />
          </Link>
        );
      })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const computers = await prisma.computer.findMany({
    select: {
      id: true,
      brand: true,
    },
  });

  return {
    props: { computers },
  };
};

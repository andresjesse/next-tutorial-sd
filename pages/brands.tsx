import { GetStaticProps } from "next";

import { Brand } from "@prisma/client";
import { Table, Typography } from "antd";
import { prisma } from "../lib/prisma";

import type { ColumnsType } from "antd/es/table";

const { Title } = Typography;

interface BrandsProps {
  brands: Array<Brand>;
}

const columns: ColumnsType<Brand> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

export default function Brands({ brands }: BrandsProps) {
  return (
    <div>
      <Title level={3}>Brands Available</Title>
      <br />

      <Table
        dataSource={brands}
        columns={columns}
        rowKey={(record) => record.id.toString()}
      />
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

import { Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import { ReactNode } from "react";

const { Header, Footer, Sider, Content } = Layout;
const { Text, Link } = Typography;

const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "item-1",
  },
  { label: <Link href="/brands">Brands</Link>, key: "item-2" },
  { label: <Link href="/computers">Computers</Link>, key: "item-3" },
  { label: <Link href="/deals">Deals</Link>, key: "item-4" },
];

interface ApplicationLayoutProps {
  children: ReactNode;
}

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  return (
    <Layout>
      <Header>
        <Menu items={items} mode="horizontal" theme="dark" />
      </Header>

      <Content style={{ padding: "50px 50px" }}>{children}</Content>

      <Footer>SD Application Demo - 2022</Footer>
    </Layout>
  );
}

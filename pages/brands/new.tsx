import { Typography } from "antd";
import BrandForm from "../../components/BrandForm";

const { Title } = Typography;

export default function NewBrand() {
  return (
    <div>
      <Title level={3}>Create a New Brand</Title>
      <br />

      <BrandForm />
    </div>
  );
}

import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axiosApi from "../../lib/axiosApi";

export default function BrandForm() {
  const onFinish = async (values: any) => {
    console.log("Success:", values);

    const response = await axiosApi.post("/api/brands/create", values);

    console.log(response);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please insert brand name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

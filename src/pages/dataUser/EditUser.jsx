import { Button, Form, Input, Space, Typography, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useGetUser, useUpdateUser } from "./hooks/useUsers";
import Gap from "../../components/gap/Gap";
import Cancel from "../../assets/icons/Cancel.png"
import Save from "../../assets/icons/Save.png"

const EditUser = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [formBio] = Form.useForm();
  const [isLoadingUser, user, getUser] = useGetUser();
  const [isLoadingUpdateUser, updateUser] = useUpdateUser();

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Title style={{ textAlign: "center" }}>Edit Data User</Title>
      <Title style={{ fontSize: "30px" }}>Informasi Member</Title>
      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit}
        style={{
          width: "600px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        fields={[
          {
            name: ["name"],
            value: rowData?.name,
          },
          {
            name: ["email"],
            value: rowData?.email,
          },
          {
            name: ["noTelepon"],
            value: rowData?.noTelepon,
          },
          {
            name: ["alamat"],
            value: rowData?.alamat,
          },
          {
            name: ["status"],
            value: rowData?.status,
          },
        ]}
      >
        <Form.Item
          name="name"
          label="Nama User"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input placeholder="Input your name" />
        </Form.Item>

        <Form.Item
          name="noTelepon"
          label="No. Telepon"
          rules={[
            {
              required: true,
              message: "Please input your No. telepon",
            },
          ]}
        >
          <Input placeholder="Input your No. Telepon" />
        </Form.Item>

        <Form.Item
          name="kota"
          label="Kota"
          rules={[
            {
              required: true,
              message: "Please input your No. telepon",
            },
          ]}
        >
          <Input placeholder="Input your No. Telepon" />
        </Form.Item>

        <Form.Item
          name="provinsi"
          label="Provinsi"
          rules={[
            {
              required: true,
              message: "Please input your No. telepon",
            },
          ]}
        >
          <Input placeholder="Input your No. Telepon" />
        </Form.Item>

        <Form.Item
          name="alamat"
          label="Alamat"
          rules={[
            {
              required: true,
              message: "Please input your alamat",
            },
          ]}
        >
          <TextArea rows={3} placeholder="Input your address" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status User"
          rules={[
            {
              required: true,
              message: "Please select your gender",
            },
          ]}
        >
          <Radio.Group name="radiogroup" defaultValue={0}>
            <Radio value={1}>Admin</Radio>
            <Radio value={2}>Member</Radio>
            <Radio value={3}>Reguler</Radio>
          </Radio.Group>
        </Form.Item>

        {/* {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoadingUpdateUser}
            >
              <img src={Save} alt="Save" />
            </Button>
            <Button type="primary" onClick={handleCancel}>
              <img src={Cancel} alt="Cancel" />
            </Button>
          </Space>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingUpdateUser}
          >
            Submit
          </Button>
        )} */}
      </Form>
    </>
  );
};

export default EditUser;

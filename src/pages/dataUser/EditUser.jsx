import {
  Button,
  Form,
  Input,
  Space,
  Typography,
  Radio,
  InputNumber,
  Modal,
  Row,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useGetUser, useUpdateUser } from "./hooks/useUsers";
import Gap from "../../components/gap/Gap";
import { Koin, MemberCard, Rp } from "../../assets";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const { name } = useParams();
  console.log(name);

  const [formBio] = Form.useForm();
  const [isLoadingUser, user, getUser] = useGetUser();
  const [isLoadingUpdateUser, updateUser] = useUpdateUser();

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(true);

  const [open, setOpen] = useState(false);
  const [size] = useState("medium");

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  const handleGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Title style={{ textAlign: "center" }}>Edit Data User</Title>
      <Title style={{ fontSize: "30px" }}>Informasi Member</Title>
      {/* Form */}
      <Row></Row>
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit}
        labelAlign="left"
        // fields={[
        //   {
        //     name: ["name"],
        //     value: rowData?.name,
        //   },
        //   {
        //     name: ["email"],
        //     value: rowData?.email,
        //   },
        //   {
        //     name: ["noTelepon"],
        //     value: rowData?.noTelepon,
        //   },
        //   {
        //     name: ["alamat"],
        //     value: rowData?.alamat,
        //   },
        //   {
        //     name: ["status"],
        //     value: rowData?.status,
        //   },
        // ]}
      >
        <Form.Item
          name="name"
          label="Nama User"
          labelCol={{ span: 3 }}
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input style={{ width: "200px" }} placeholder="Input your name" />
        </Form.Item>

        <Form.Item
          name="noTelepon"
          label="No. Telepon"
          labelCol={{ span: 3 }}
          rules={[
            {
              required: true,
              message: "Please input your No. telepon",
            },
          ]}
        >
          <Input
            style={{ width: "200px" }}
            placeholder="Input your No. Telepon"
          />
        </Form.Item>

        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="kota"
              label="Kota"
              rules={[
                {
                  required: true,
                  message: "Please input your Kota",
                },
              ]}
            >
              <Input style={{ width: "200px" }} placeholder="Input your Kota" />
            </Form.Item>
          </div>

          <div style={{ flex: 1 }}>
            <Form.Item
              name="provinsi"
              label="Provinsi"
              rules={[
                {
                  required: true,
                  message: "Please input your Provinsi",
                },
              ]}
            >
              <Input
                style={{ width: "200px" }}
                placeholder="Input your Provinsi"
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          name="alamat"
          label="Alamat"
          labelCol={{ span: 3 }}
          rules={[
            {
              required: true,
              message: "Please input your alamat",
            },
          ]}
        >
          <TextArea
            rows={3}
            style={{ width: "450px" }}
            placeholder="Input your Alamat"
          />
        </Form.Item>

        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="saldo"
              label="Saldo"
              rules={[
                {
                  required: true,
                  message: "Please input your saldo",
                },
              ]}
            >
              <InputNumber
                style={{
                  width: "150px",
                  backgroundImage: `url(${Rp})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundSize: "2.5rem",
                  paddingLeft: "2.5rem",
                }}
                placeholder="10.000"
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                parser={(value) => value.replace(/\./g, "")}
              />
            </Form.Item>
          </div>

          <div style={{ flex: 1 }}>
            <Form.Item
              name="koin"
              label="Jumlah Koin"
              rules={[
                {
                  required: true,
                  message: "Please input your koin",
                },
              ]}
            >
              <InputNumber
                style={{
                  width: "150px",
                  backgroundImage: `url(${Koin})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundSize: "2.5rem",
                  paddingLeft: "2.5rem",
                }}
                placeholder="50.000 koin"
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                parser={(value) => value.replace(/\./g, "")}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          name="status"
          label="Status User"
          rules={[
            {
              required: true,
              message: "Please select your status",
            },
          ]}
        >
          <Radio.Group name="radiogroup" defaultValue={0}>
            <Space>
              <Radio
                value={1}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                Admin
              </Radio>
              <Radio
                value={2}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                Member
              </Radio>
              <Radio
                value={3}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                Reguler
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="memberCard" label="Member Card">
          <Space>
            <Button type="primary" onClick={() => setOpen(true)}>
              Preview
            </Button>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size={size}
              href={MemberCard}
              download
            />
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={2000}
            >
              <img src={MemberCard} alt="Member Card" />
            </Modal>
          </Space>
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {isEdit ? (
            <Space>
              <Button
                onClick={handleCancel}
                style={{ width: "100px", height: "40px" }}
              >
                Cancel
              </Button>
              <Button
                htmlType="submit"
                loading={isLoadingUpdateUser}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  width: "150px",
                  height: "40px",
                }}
              >
                Save
              </Button>
            </Space>
          ) : (
            <Button
              onClick={handleGoBack}
              style={{ width: "100px", height: "40px" }}
            >
              Kembali
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default EditUser;

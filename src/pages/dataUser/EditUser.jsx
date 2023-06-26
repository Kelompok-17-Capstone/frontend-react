import {
  Button,
  Form,
  Input,
  Space,
  Typography,
  Radio,
  InputNumber,
  Modal,
} from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Koin, MemberCard, Rp } from "../../assets";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetMember,
  useGetReguler,
  useGetUsers,
  useUpdateUser,
  useGetUserById
} from "../../hooks/useGetDataUsers";

const EditUser = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  const {id} = useParams()
  const [formBio] = Form.useForm();
  const [isLoadingUser, user, getUser] = useGetUsers();
  const [isLoadingMember, member, getMember] = useGetMember();
  const [isLoadingReguler, reguler, getReguler] = useGetReguler();
  const [isLoadingUpdateUser, updateUser] = useUpdateUser();
  const [isLoadingGetUserById, userData, getUserById] = useGetUserById()
  const [open, setOpen] = useState(false);
  const [size] = useState("large");
  const navigate = useNavigate();

  const handleCancel = () => {
    formBio.resetFields();
    navigate("/data-user");
  };

  const handleSave = (values) => {
    const id = userData?.id;
    updateUser(id, values, () => {
      getUserById();
      handleCancel();
      navigate("/data-user");
    });
  };
  
  useEffect (() => {
    getUserById(id);
  }, [id])

  return (
    <>
      <Title style={{ textAlign: "center" }}>Edit Data User</Title>
      <Title style={{ fontSize: "30px" }}>Informasi Member</Title>
      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={handleSave}
        labelAlign="left"
        fields={[
          {
            name: ["name"],
            value: userData?.name,
          },
          {
            name: ["phone_number"],
            value: userData?.phone_number,
          },
          {
            name: ["address"],
            value: userData?.address,
          },
          {
            name: ["status"],
            value: userData?.status,
          },
        ]}
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
          name="phone_number"
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
              name="city"
              label="Kota"
            >
              <Input style={{ width: "200px" }} placeholder="Input your Kota" />
            </Form.Item>
          </div>

          <div style={{ flex: 1 }}>
            <Form.Item
              name="province"
              label="Provinsi"
            >
              <Input
                style={{ width: "200px" }}
                placeholder="Input your Provinsi"
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          name="address"
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
            <Space>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "150px",
                  height: "40px",
                }}
                onClick={handleCancel}
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
        </div>
      </Form>
    </>
  );
};

export default EditUser;

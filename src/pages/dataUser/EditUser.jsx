import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
  Tabs,
  Radio,
} from "antd";
import React, { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constants";
import {
  useDeleteBiodata,
  useGetBiodata,
  usePostBiodata,
  useUpdateBiodata,
} from "./hooks/useBiodatas";
import Gap from "../../components/gap/Gap";
import { ITEMS } from "./ConstansTabs";
import Edit from "../../assets/icons/Edit.png";
import Delete from "../../assets/icons/Delete.png"

const EditUser = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [formBio] = Form.useForm();
  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();
  const [isLoadingUpdateBiodata, updateBiodata] = useUpdateBiodata();
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "No Telepon",
      dataIndex: "noTelepon",
      key: "noTelepon",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a>
              <img
                src={Edit}
                alt="Edit"
                onClick={() => handleEdit(record)}
              ></img>
            </a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <a>
                <img src={Delete} alt="Delete" />
              </a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  //   to handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
    window.scrollTo(0, 0);
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  //   Add Data to table
  const onAdd = (values) => {
    createBiodata(values, () => {
      getBiodata();
    });

    formBio.resetFields();
  };

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };

  //   Edit Data from table
  const onEdit = (values) => {
    const id = rowData?.id;
    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });
  };

  useEffect(() => {
    getBiodata();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <Tabs defaultActiveKey="1" items={ITEMS} onChange={onChange} />

      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
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
            name: ["gender"],
            value: rowData?.gender,
          },
          {
            name: ["noTelepon"],
            value: rowData?.noTelepon,
          },
          {
            name: ["alamat"],
            value: rowData?.alamat,
          },
        ]}
      >
        <Form.Item
          name="name"
          label="Nama"
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
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select your gender",
            },
          ]}
        >
          <Radio.Group name="radiogroup" defaultValue={0}>
            <Radio value={1}>Laki-laki</Radio>
            <Radio value={2}>Perempuan</Radio>
          </Radio.Group>
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
          name="alamat"
          label="Alamat"
          rules={[
            {
              required: true,
              message: "Please input your alamat",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Input your address" />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoadingUpdateBiodata}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingCreateBiodata}
          >
            Submit
          </Button>
        )}
      </Form>
    </>
  );
}

export default EditUser;

import { Form, Popconfirm, Space, Table, Tabs, Input } from "antd";
import React, { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constants";
import {
  useDeleteBiodata,
  useGetBiodata,
  useUpdateBiodata,
} from "./hooks/useBiodatas";
import { ITEMS } from "./ConstansTabs";
import Edit from "../../assets/icons/Edit.png";
import Delete from "../../assets/icons/Delete.png";

const DataUser = () => {
  const { Search } = Input;

  const [formBio] = Form.useForm();
  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();
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
              title="Yakin mau dihapus?"
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

  const onSearch = (value) => console.log(value);

  const Pencarian = () => {
    <Space direction="vertical">
      <Search
        placeholder="Search 'Data Pesanan'"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </Space>;
  };

  return (
    <>
      <Tabs defaultActiveKey="1" items={ITEMS} onChange={onChange} />

      {/* Table */}
      <Table
        rowKey="id"
        columns={TABLE_COLUMNS}
        dataSource={biodata}
        loading={isLoadingBiodata || isLoadingDeleteBiodata}
      />
    </>
  );
};

export default DataUser;

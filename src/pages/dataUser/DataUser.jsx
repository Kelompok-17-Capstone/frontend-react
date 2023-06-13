import { Popconfirm, Space, Table, Tabs, Input } from "antd";
import React, { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constants";
import {
  useDeleteUser,
  useGetUser,
} from "./hooks/useUsers";
import { ITEMS } from "./ConstansTabs";
import Edit from "../../assets/icons/Edit.png";
import Delete from "../../assets/icons/Delete.png";
import Background from "../../assets/images/BackgroundDataUser.png";

const DataUser = () => {
  const { Search } = Input;

  const [isLoadingUser, user, getUser] = useGetUser();
  const [isLoadingDeleteUser, deleteUser] = useDeleteUser();

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
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a href="/edit-user">
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

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteUser(row_id, () => {
      getUser();
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  const onSearch = (value) => console.log(value);

  return (
    <>
      <Tabs defaultActiveKey="1" items={ITEMS} onChange={onChange} />

      <Space direction="vertical">
      <Search
        placeholder="Search 'Data Pesanan'"
        allowClear
        onSearch={onSearch}
        style={{
          width: 300,
        }}
      />
    </Space>

      {/* Table */}
      <Table
        rowKey="id"
        columns={TABLE_COLUMNS}
        dataSource={user}
        loading={isLoadingUser || isLoadingDeleteUser}
      />
    </>
  );
};

export default DataUser;

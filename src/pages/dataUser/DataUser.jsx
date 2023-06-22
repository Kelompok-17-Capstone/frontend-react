import TableComponent from "../../components/tableComponent/TableComponent";
import { Popconfirm, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { INITIAL_TABLE_DATA } from "./constants";
import { useDeleteUser, useGetUser } from "./hooks/useUsers";
import { Delete, Edit } from "../../assets";


const DataUser = () => {

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
              >
              </img>
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

  return (
    <>
      <TableComponent />
    </>
  );
};

export default DataUser;

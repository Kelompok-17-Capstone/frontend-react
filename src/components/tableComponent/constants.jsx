import { Popconfirm, Space } from "antd"
import { Trash, NotePencil } from "@phosphor-icons/react"
import { Link } from "react-router-dom";

export const dataProdukHeader = [
  {
    title: "Nama Produk",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Deskripsi",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Kondisi",
    dataIndex: "kondisi",
    render: () => "baru",
  },
  {
    title: "Jumlah Produk",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Harga Produk",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  
  {
    title: "Action",
    dataIndex: "action",
    render: (_, record) => (
      <Space>
        {/* Menggunakan Link untuk tombol edit */}
        <Link to={`/edit-data-produk/${record.id}`}>
          <NotePencil size={20} color="#264eca" />
        </Link>
        <Popconfirm title="Sure to delete?" arrow={false}>
          <a>
            <Trash size={20} color="#ee2e2e" />
          </a>
        </Popconfirm>
      </Space>
    ),
  },
];

export const dataUserHeader = [
    {
        title: "Nama",
        dataIndex: "name",
        key: 'name'
    },
    {
        title: "Email",
        dataIndex: "email",
        key: 'email'
    },
    {
        title: "No Telepon",
        dataIndex: "phone_number",
        key: 'phone_number'
    },
    {
        title: "Alamat",
        dataIndex: "address",
        key: 'address'
    },
    {
        title: "Status",
        dataIndex: "status",
        key: 'status'
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (_, record) =>
           (
            <Space>
              <a onClick={() => handleEdit(record)}><NotePencil size={20} color="#264eca" /></a>
              <Popconfirm
                title="Sure to delete?"
                arrow={false}
                // onConfirm={() => onDelete(record.id)}
              >
                <a><Trash size={20} color="#ee2e2e" /></a>
              </Popconfirm>
            </Space>
          ) 
      },
]

export const dataPesanananHeader = [
    {
        title: "Nama Pesanan",
        dataIndex: "name",
        key: 'name'
    },
    {
        title: "Alamat",
        dataIndex: "address",
        key: 'address'
    },
    {
        title: "Produk",
        dataIndex: "product",
        key: 'product'
    },
    {
        title: "Jumlah Produk",
        dataIndex: "total_quantity",
        key: 'total_quantity'
    },
    {
        title: "Total Harga (RP)",
        dataIndex: "total_price",
        key: 'total_price'
    },
    {
        title: "Waktu Pesan",
        dataIndex: "order_at",
        key: 'order_at'
    },
    {
        title: "Waktu Sampai",
        dataIndex: "arrived_at",
        key: 'arrived_at'
    },
    {
        title: "Status",
        dataIndex: "status",
        key: 'status'
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (_, record) => (
            <Space>
              <Link to={`/edit-pesanan/${record.id}`}>
                <NotePencil size={20} color="#264eca" />
              </Link>
              <Popconfirm title="Sure to delete?" arrow={false}
              onConfirm={() => onDelete(record.id)}>
               
                <a>
                  <Trash size={20} color="#ee2e2e" />
                </a>
              </Popconfirm>
            </Space>
          ),
        },
      ];

// Tabs Constants
export const dataProdukTab = [
    {
        tab: "Data Produk",
        key: 'dataProduk'
    },
    {
        tab: "Produk Tersedia",
        key: 'produkTersedia'
    },
    {
        tab: "Produk Habis",
        key: 'produkHabis'
    },
]

export const dataUserTab = [
    {
        tab: "Data User",
        key: 'dataUser'
    },
    {
        tab: "Data Member",
        key: 'dataMember'
    },
    {
        tab: "Data Reguler",
        key: 'dataReguler'
    },
]

export const dataPesananTab = [
    {
        tab: "Daftar Pesanan",
        key: 'daftarPesanan'
    },
    {
        tab: "Dikemas",
        key: 'dikemas'
    },
    {
        tab: "Dikirim",
        key: 'dikirim'
    },
    {
        tab: "Diterima",
        key: 'diterima'
    },
]
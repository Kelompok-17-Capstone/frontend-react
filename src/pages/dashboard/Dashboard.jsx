import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useState } from "react";
import { INITIAL_TABLE_DATAS } from "./constans";
import "./dashBoard.css";
import { INITIAL_TABLE_DATASS } from "./constans";
import { INITIAL_TABLE_DATASSS } from "./constans";
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { useGetDashboardData } from './hooks/useDashboard';
import { User, CaretRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';


const data = [
  { name: 'Data 1', value: 30 },
  { name: 'Data 2', value: 50 },
  { name: 'Data 3', value: 20 },
  { name: 'Data 4', value: 40 },
];

const PieChartComponent = () => {
  const [isLoading, dataDashboard, getDashboard] = useGetDashboardData();
  console.log(dataDashboard);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#00FFFF']; // warna untuk setiap sektor pie chart
  const [users] = useState(INITIAL_TABLE_DATAS);

  const columns = [
    {
      dataIndex: "icon",
      key: 'icon',
      className: 'data1',
      render: () => <User size={24} color="#000" />
    },
    {
      dataIndex: 'name',
      key: 'name',
      className: 'data1',
    },
    {
      dataIndex: 'phone_number',
      key: 'phone_number',
      className: 'data1',
    },
    {
      dataIndex: 'address',
      key: 'address',
      className: 'data1',
    },
    {
      dataIndex: 'role',
      key: 'role',
      className: 'data1',
      render: (role) => {
        let backgroundColor, color, fontWeight;
        if (role === 'member') {
          backgroundColor = 'rgba(0, 49, 123, 1)';
          color = 'white';
          fontWeight = 'bold';
        } else if (role === 'reguler') {
          backgroundColor = 'green';
          color = 'white';
          fontWeight = 'bold';
        }
        return (
          <span style={{ backgroundColor, color, padding: '4px 8px', borderRadius: '4px', fontWeight }}>
            {role}
          </span>
        );
      },
    },
  ];

  const [orders] = useState(INITIAL_TABLE_DATASS);
  const columnss = [
    {
      dataIndex: 'user_name',
      key: 'user_name',
      className: 'data1'
    },
    {
      dataIndex: 'address',
      key: 'address',
      className: 'data1'
    },
    {
      dataIndex: 'product_name',
      key: 'product_name',
      className: 'data1'
    },
    {
      dataIndex: 'quantity',
      key: 'quantity',
      className: 'data1'
    },
    {
      dataIndex: 'order_at',
      key: 'order_at',
      className: 'data1'
    },
    {
      dataIndex: 'status',
      key: 'status',
      className: 'data1',
      render: (status) => {
        let backgroundColor, color, fontWeight;
        if (status === 'Tersedia') {
          backgroundColor = 'green';
          color = 'white';
          fontWeight = 'bold';
        } else if (status === 'tidak tersedia') {
          backgroundColor = 'blue';
          color = 'white';
          fontWeight = 'bold';
        }
        return (
          <span style={{ backgroundColor, color, padding: '4px 8px', borderRadius: '4px', fontWeight }}>
            {status}
          </span>
        );
      },
    },
  ];

  const [products] = useState(INITIAL_TABLE_DATASSS);
  const columnsss = [
    {
      dataIndex: 'name',
      key: 'name',
      className: 'data1'
    },
    {
      dataIndex: 'description',
      key: 'description',
      className: 'data1'
    },
    {
      dataIndex: 'stock',
      key: 'stock',
      className: 'data1',
    },
    {
      dataIndex: 'price',
      key: 'price',
      className: 'data1',
    },
    {
      dataIndex: 'status',
      key: 'status',
      className: 'data1',
      render: (status) => {
        let backgroundColor, color, fontWeight;
        if (status === 'Tersedia') {
          backgroundColor = 'green';
          color = 'white';
          fontWeight = 'bold';
        } else if (status === 'tidak tersedia') {
          backgroundColor = 'blue';
          color = 'white';
          fontWeight = 'bold';
        }
        return (
          <span style={{ backgroundColor, color, padding: '4px 8px', borderRadius: '4px', fontWeight }}>
            {status}
          </span>
        );
      },
    },
  ];

  useEffect(() => {
    getDashboard();
  }, []);

  return (
    <div>
      <div><h1>Welcome to your dashboard, Admin 1</h1></div>

      <Row>
        <Col span={12} push={11} className='data1'>
          <Link to="/daftar-pesanan">
            <h1 className='jarak'>Daftar Pesanan<CaretRight size={32} className='Caret' /></h1>
          </Link>
          <Table columns={columnss} dataSource={dataDashboard?.orders} />
        </Col>
        <Col span={10} pull={12} className='data1'>
          <Link to="/data-user">
            <h1 className='jarak'>Data User<CaretRight size={32} className='Caret' /></h1>
          </Link>
          <Table columns={columns} dataSource={dataDashboard?.users} />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={12} push={16} className='data2'>
          <a><h1 className='jarak'>Data Penjualan<CaretRight size={32} className='Caret' /></h1></a>
          <PieChart width={400} height={200}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          <br />
          <br />
        </Col>
        <Col span={13} pull={9} className='data3'>
          <Link to="/data-produk">
            <h1 className='jarak'>Data Produk<CaretRight size={32} className='Caret' /></h1>
          </Link>
          <Table className="datakolom" columns={columnsss} dataSource={dataDashboard?.products} />
        </Col>
      </Row>
    </div>
  );
};

export default PieChartComponent;
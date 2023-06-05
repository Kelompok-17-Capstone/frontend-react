import { Col, Row} from 'antd';
import React from 'react';
import { Table} from 'antd';
import { useState } from "react";
import { INITIAL_TABLE_DATAS } from "./constans";
import "./dashBoard.css";
import { INITIAL_TABLE_DATASS } from "./constans";
import { INITIAL_TABLE_DATASSS } from "./constans";
import { PieChart, Pie, Cell, Legend, Tooltip, } from 'recharts';

const data = [
  { name: 'Data 1', value: 30 },
  { name: 'Data 2', value: 50 },
  { name: 'Data 3', value: 20 },
  { name: 'Data 4', value: 40 },
];
const PieChartComponent = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#00FFFF']; // warna untuk setiap sektor pie chart
  const [datas] = useState(INITIAL_TABLE_DATAS);
  const columns = [
    {
        dataIndex: 'ICON',
        key: 'ICON',
        className:'data1',
      },
    {
      dataIndex: 'names',
      className:'data1',
      key: 'names',
    },
    {
      dataIndex: 'gender',
      className:'data1',
      key: 'gender',
    },
    {
      dataIndex: 'address',
      className:'data1',
      key: 'address',
    },
    {
      dataIndex: 'member',
      className:'data1',
      key: 'member',
    },
   
];
const [datass] = useState(INITIAL_TABLE_DATASS);
const columnss = [

  {
    dataIndex: 'names',
    className:'data1',
    key: 'names',
  },
  {
    dataIndex: 'address',
    className:'data1',
    key: 'address',
  },
  {
    dataIndex: 'item',
    className:'data1',
    key: 'item',
  },
  {
    dataIndex: 'jumlah',
    className:'data1',
    key: 'jumlah',
  },
  {
    dataIndex: 'tanggal',
    className:'data1',
    key: 'tanggal',
  },
  {
    dataIndex: 'informasi',
    className:'data1',
    key: 'informasi',
  },
 
];
const [datasss] = useState(INITIAL_TABLE_DATASSS);
const columnsss = [

  {
    dataIndex: 'item',
    className:'data1',
    key: 'item',
  },
  {
    dataIndex: 'kondisi',
    className:'data1',
    key: 'kondisi',
  },
  {
    dataIndex: 'jumlah',
    className:'data1',
    key: 'jumlah',
  },
  {
    dataIndex: 'harga',
    className:'data1',
    key: 'harga',
  },
  {
    dataIndex: 'informasi',
    className:'data1',
    key: 'informasi',
  },
 
];

  return (
    <div>
        <h1 className='judul'>Welcome to your dashboard, Admin 1</h1>
  <Row>
    <Col span={12} push={11} className='data1'>
      <a><h1 className='jarak'>Data Pesanan</h1></a>
    <Table columns={columnss} dataSource={datass} />
    </Col >
    <Col span={9} pull={11} className='data1'>
    <a><h1 className='jarak'>Data User</h1></a>
    <Table columns={columns} dataSource={datas} />
    </Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col span={12} push={16} className='data2'>
    <a><h1 className='jarak'>Data Penjualan</h1></a>
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
    <a><h1 className='jarak'>Data Produk</h1></a>
    <Table columns={columnsss} dataSource={datasss} />
    </Col>
  </Row>
  </div>
  );
};

export default PieChartComponent ;
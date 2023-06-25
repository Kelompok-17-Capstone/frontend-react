import { Col, Row} from 'antd';
import React, { useEffect } from 'react';
import { Table} from 'antd';
import { useState } from "react";
import { INITIAL_TABLE_DATAS } from "./constans";
import "./dashBoard.css";
import { INITIAL_TABLE_DATASS } from "./constans";
import { INITIAL_TABLE_DATASSS } from "./constans";
import { PieChart, Pie, Cell, Legend, Tooltip, } from 'recharts';
import { CaretRight } from '@phosphor-icons/react'; 
import { useGetDashboardData } from './hooks/useDashboard';



const data = [
  { name: 'Data 1', value: 30 },
  { name: 'Data 2', value: 50 },
  { name: 'Data 3', value: 20 },
  { name: 'Data 4', value: 40 },
];

const PieChartComponent = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#00FFFF']; // warna untuk setiap sektor pie chart
  const [datas] = useState(INITIAL_TABLE_DATAS);

const [isLoadingData, dashboardData, getDashboardData] = useGetDashboardData();
  useEffect(() => {
  getDashboardData()
  }, 
  []);  
  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      className:'data1',
      },
    {
      dataIndex: 'phone_numer',
      className:'data1',
      key: 'phone_number',
    },
  
    {
      dataIndex: 'address',
      className:'data1',
      key: 'address',
    },
    {
      dataIndex: 'role',
      className:'data1',
      key: 'role',
    },
   
];
const [datass] = useState(INITIAL_TABLE_DATASS);
const columnss = [

  {
    dataIndex: 'user_name',
    className:'data1',
    key: 'user_name',
  },
  {
    dataIndex: 'address',
    className:'data1',
    key: 'address',
  },
  {
    dataIndex: 'product_name',
    className:'data1',
    key: 'product_name',
  },
  {
    dataIndex: 'quantity',
    className:'data1',
    key: 'quantity',
  },
  {
    dataIndex: 'order_at',
    className:'data1',
    key: 'order_at',
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
    dataIndex: 'name',
    className:'data1',
    key: 'name',
  },
  {
    dataIndex: 'description',
    className:'data1',
    key: 'description',
  },
  {
    dataIndex: 'stock',
    className:'data1',
    key: 'stock',
  },
  {
    dataIndex: 'price',
    className:'data1',
    key: 'price',
  },
  {
    dataIndex: 'status',
    className:'data1',
    key: 'status',
  },
 
];

  return (
    <div>
        <h1 className='judul'>Welcome to your dashboard, Admin 1</h1>
  <Row>
    <Col span={12} push={11} className='data1'>
      <a><h1 className='jarak'>Data Pesanan<CaretRight size={32} className='icon1'/></h1></a>
    <Table columns={columnss} dataSource={dashboardData?.datass} />
    </Col >
    <Col span={9} pull={11} className='data1'>
    <a><h1 className='jarak'>Data User<CaretRight size={32} className='icon1'/></h1></a>
    <Table columns={columns} dataSource={dashboardData?.users} />
    </Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col span={12} push={16} className='data2'>
    <a><h1 className='jarak'>Data Penjualan<CaretRight size={32} className='icon1'/></h1></a>
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
    <a><h1 className='jarak'>Data Produk<CaretRight size={32} className='icon1' /></h1></a>
    <Table columns={columnsss} dataSource={dashboardData?.datasss} />
    </Col>
  </Row>
  </div>
  );
};

export default PieChartComponent ;
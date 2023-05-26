import React from "react";
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import './layoutsComponent.css'
import { LogoLayout } from "../../assets";
import { House, IdentificationCard, List, Notebook, Package } from "@phosphor-icons/react";
const { Header, Sider, Content } = Layout;

const LayoutsComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="siderLayout">
        {!collapsed && 
        <div> 
          <img src={LogoLayout} alt="" /> 
          <p className="textLogo" >Alta Tech</p>
        </div>}
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ 
            height: '100vh',
            backgroundColor: '#00317B'
           }}
          items={[
            {
              key: '1',
              icon: <House size={25} />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <IdentificationCard size={25} />,
              label: 'Data User',
            },
            {
              key: '3',
              icon: <Notebook size={25} />,
              label: 'Daftar Pesanan',
            },
            {
              key: '4',
              icon: <Package size={25} />,
              label: 'Data Product',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={<List size={32} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
      </Layout>
  );
};

export default LayoutsComponent;

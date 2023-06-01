import React from "react";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import "./layoutsComponent.css";
import { LogoLayout } from "../../assets";
import {
  Bell,
  DoorOpen,
  House,
  IdentificationCard,
  List,
  Notebook,
  Package,
  User,
} from "@phosphor-icons/react";
import Search from "antd/es/input/Search";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const LayoutsComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(collapsed)
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="siderLayout"
        width={250}
      >
        {!collapsed && (
          <div className="logo-container">
            <img src={LogoLayout} alt="" />
            <p className="text-logo">Alta Tech</p>
          </div>
        )}
        {collapsed && 
            <Button
              type="text"
              icon={<List size={28} weight="fill" color="white" />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 50,
                height: 50,
                backgroundColor: "#00317B",
                marginTop: "15px",
                marginLeft: "18px"
              }}
            />
          }

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/dashboard"]}
          style={{
            backgroundColor: "#00317B",
          }}
          items={[
            {
              key: "/dashboard",
              icon: <House size={25} />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "/data-user",
              icon: <IdentificationCard size={25} />,
              label: <Link to="/data-user">Data User</Link>,
            },
            {
              key: "/daftar-pesanan",
              icon: <Notebook size={25} />,
              label: <Link to="/daftar-pesanan">Daftar Pesanan</Link>,
            },
            {
              key: "/data-product",
              icon: <Package size={25} />,
              label: <Link to="/data-product">Data Product</Link>,
            },
          ]}
        />
        <div className="logout-container">
          <Link to='/'>
            <Button
             className="logout-button"
             onClick={() => {
              localStorage.removeItem('token')
             }}>
              <DoorOpen size={25} />
              {!collapsed && <span>Logout</span>}
            </Button>
          </Link>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: "#F0F0F0",
            height: "93px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {!collapsed && 
            <Button
              type="text"
              icon={<List size={28} weight="fill" color="white" />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 50,
                height: 50,
                backgroundColor: "#00317B",
                marginTop: "15px",
                marginRight: "auto",
              }}
            />
          }

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <Bell size={20} style={{ marginRight: "10px" }} />
            <Search
              placeholder="Search..."
              style={{ width: 200, marginRight: "10px" }}
            />
            <span style={{ marginRight: "10px" }}>Hi, Admin</span>
            <User size={20} />
          </div>
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

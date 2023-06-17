import React from "react";
import { Button, Layout, Menu, Modal, theme, Input } from "antd";
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
import { Link, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const LayoutsComponent = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(true);
  };
  const confirmLogout = () => {
    localStorage.removeItem("token");
    setShowModal(false);
    navigate("/");
  };
  const cancelLogout = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="siderLayout"
        style={{ height: "100vh", left: "0" }}
        width={250}
      >
        {!collapsed && (
          <div className="logo-container">
            <img src={LogoLayout} alt="" />
            <p className="text-logo">Alta Tech</p>
          </div>
        )}
        {collapsed && (
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
              marginLeft: "18px",
            }}
          />
        )}

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/dashboard"]}
          style={{
            backgroundColor: "#00317B",
          }}
        >
          {[
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
              key: "/data-produk",
              icon: <Package size={25} />,
              label: <Link to="/data-produk">Data Product</Link>,
            },
          ].map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>

        <div className="logout-container">
          <Button className="logout-button" onClick={handleLogout}>
            <DoorOpen size={25} />
            {!collapsed && <span>Logout</span>}
          </Button>
          <Modal open={showModal} onCancel={cancelLogout} footer={null}>
            <h4 className="titleLogout">Konfirmasi Log out</h4>
            <p className="bodyLogout">Apakah anda yakin untuk Log Out ?</p>
            <div
              className="modal-buttons-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <Button onClick={cancelLogout} className="btnCancelLogout">
                Kembali Ke Home Page
              </Button>
              <Button
                type="primary"
                onClick={confirmLogout}
                className="btnConfirmLogout"
              >
                Logout
              </Button>
            </div>
          </Modal>
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
          {!collapsed && (
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
                borderRadius: "0 10px 10px 0",
              }}
            />
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <Bell size={20} style={{ marginRight: "10px" }} />
            <Search
              placeholder="input search text"
              // onSearch={onSearch}
              style={{
                width: 200,
                marginRight: '20px',
              }}
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

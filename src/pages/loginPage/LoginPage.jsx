import "./loginPage.css";
import { useState } from "react";
import { Button, Input, Form, Card, Modal } from "antd";
import { BG_Login } from "../../assets";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useLogin } from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoadingLogin, login, modalVisible, modalContent, closeModal] =
    useLogin();

  const onLogin = (values) => {
    login(values, () => {});
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleModalConfirm = () => {
    closeModal();
    if (modalContent === "success") {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${BG_Login})`,
      }}
    >
      <div className="login-container">
        <Card className="login-card">
          <p className="login-title">Login</p>
          <p className="noted">
            Please fill in your unique admin login details below
          </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onLogin}
          >
            <p className="name-form">Email Address</p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email Address!",
                },
              ]}
            >
              <Input placeholder="Email Address" style={{ height: "40px" }}/>
            </Form.Item>
            <p className="name-form">Password</p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ height: "40px" }}
                suffix={
                  showPassword ? (
                    <EyeSlash onClick={toggleShowPassword} size={16} />
                  ) : (
                    <Eye onClick={toggleShowPassword} size={16} />
                  )
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={isLoadingLogin}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <Modal
        open={modalVisible}
        onCancel={closeModal}
        centered
        footer={null} // Remove the default footer buttons
        className="custom-modal"
      >
        {modalContent === "success" ? (
          <>
            <h3 className="loginSuccessText">Login Success</h3>
            <p>Welcome to the Dashboard</p>
            <Button key="confirm" type="primary" onClick={handleModalConfirm} className="btnLoginSuccess">
              Confirm
            </Button>
          </>
        ) : (
          <>
            <h3 className="loginFailedText">Login Failed</h3>
            <p>Wrong Email Address / Password</p>
            <Button key="try-again" type="primary" onClick={closeModal} className="btnLoginFailed">
              Try Again
            </Button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default LoginPage;

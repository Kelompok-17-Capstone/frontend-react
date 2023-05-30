import "./loginPage.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Input, Checkbox, Form, Card, Modal } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { BG_Login } from "../../assets";



const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isFailureModalVisible, setIsFailureModalVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showSuccessModal = () => {
    setIsSuccessModalVisible(true);
  };

  const showFailureModal = () => {
    setIsFailureModalVisible(true);
  };

  const handleSuccessModalConfirm = () => {
    setIsSuccessModalVisible(false);
  };

  const handleFailureModalTryAgain = () => {
    setIsFailureModalVisible(false);
  };

  const onFinish = (values) => {
    const { username, password } = values;
    // Temporary login data for demonstration
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
      showSuccessModal();
    } else {
      showFailureModal();
    }
  };

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${BG_Login})`,
      }}>
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
            onFinish={onFinish}>
            <p className="name-form">Email Address</p>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Email Address!",
                },
              ]}>
              <Input placeholder="Email Address" />
            </Form.Item>
            <p className="name-form">Password</p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                suffix={
                  showPassword ? (
                    <EyeOutlined onClick={togglePasswordVisibility} />
                  ) : (
                    <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
                  )
                }
              />
            </Form.Item>
 
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>

      <Modal
        title="Login Successful"
        open={isSuccessModalVisible}
        footer={[
          <Link to="/dashboard">
            <Button type="primary" className="confirm-button">
              Confirm
            </Button>
          </Link>,
        ]}>
        <p className="modal-content">Welcome To Dashboard Admin</p>
      </Modal>

      <Modal
        title="Login Failed"
        open={isFailureModalVisible}
        footer={[
          <Button
            type="primary"
            className="try-again-button"
            onClick={handleFailureModalTryAgain}>
            Try Again
          </Button>,
        ]}>
        <p className="modal-content">Wrong Email Address / Password</p>
      </Modal>
    </div>
  );
};

// const mountNode = document.getElementById("root");
// ReactDOM.render(<LoginPage />, mountNode);

export default LoginPage;

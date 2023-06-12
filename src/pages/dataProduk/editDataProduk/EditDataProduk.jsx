import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Button,
  message,
  Col,
  Row,
  Modal,
} from "antd";
import { PlusOutlined, MinusOutlined, UploadOutlined } from "@ant-design/icons";
import "./editDataProduk.css";

const EditDataProduk = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [uploadedFile, setUploadedFile] = useState(null);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const formValues = Object.values(values);
    const isFormEmpty = formValues.some(
      (value) => value === undefined || value === ""
    );

    if (isFormEmpty) {
      message.error("Gagal mengirim. Pastikan semua form telah diisi.");
    } else {
      const { waktuPesan, waktuSampai } = values;
      if (waktuPesan && waktuSampai && waktuPesan.isAfter(waktuSampai)) {
        message.error("Waktu pesan tidak boleh lebih besar dari waktu sampai.");
      } else {
        message.success("Form berhasil dikirim!");
      }
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div className="bro">
      <h1 className="judul">Edit Data Produk</h1>
      <h3 className="judul1">Masukkan Informasi Produk</h3>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 15 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{ maxWidth: 1400 }}
        onFinish={onFinish}>
        {/* Form fields */}
      </Form>

      <Modal
        title="Konfirmasi"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}>
        <p>Anda yakin ingin membatalkan?</p>
      </Modal>
    </div>
  );
};

export default EditDataProduk;

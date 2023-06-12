import React, { useState } from "react";
import { Form, Input, Radio, Button, Modal } from "antd";
import { PlusOutlined, MinusOutlined, UploadOutlined } from "@ant-design/icons";
import "./editDataProduk.css";

const EditDataProduk = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [jumlahProduk, setJumlahProduk] = useState(0);

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
    // Handle form submission
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div className="bro">
      <h1 className="judul" style={{ marginBottom: "-3%" }}>
        Edit Data Produk
      </h1>
      <h3 className="judul1" style={{ marginBottom: "3%" }}>
        Masukkan Informasi Produk
      </h3>
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
        <Form.Item
          label="Nama Produk"
          className="form-item-label"
          name="namaProduk">
          <Input placeholder="Keyboard" className="nama-produk" />
        </Form.Item>

        <Form.Item
          label="Deskripsi"
          className="form-item-label"
          name="deskripsiProduk">
          <Input.TextArea
            placeholder="Deskripsi Produk"
            className="Deskripsis"
          />
        </Form.Item>

        <Form.Item
          label="Jumlah Produk"
          className="form-item-label"
          name="jumlahProduk">
          <div className="Jumlahproduk">
            <Button
              type="text"
              icon={<MinusOutlined className="minus-icon" />}
              onClick={() => {
                if (jumlahProduk > 0) {
                  setJumlahProduk(jumlahProduk - 1);
                }
              }}
              className="minus-button"
            />
            <Input
              className="input-number"
              placeholder="0"
              value={jumlahProduk}
              min={0}
              max={500}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              step={1}
            />
            <Button
              type="text"
              icon={<PlusOutlined className="plus-icon" />}
              onClick={() => {
                if (jumlahProduk < 500) {
                  setJumlahProduk(jumlahProduk + 1);
                }
              }}
              className="plus-button"
            />
          </div>
        </Form.Item>

        <Form.Item
          label="Harga Produk"
          className="form-item-label"
          name="hargaProduk">
          <Input
            className="form-item-label-harga"
            addonBefore={
              <span style={{ fontWeight: "bold", color: "#ffffff" }}>RP</span>
            }
            placeholder="100000"
            style={{ backgroundColor: "#00317B", width: "25%" }}
          />
        </Form.Item>

        <Form.Item
          label="Upload Foto Produk"
          className="form-item-label-upload"
          name="fotoProduk">
          <div className="upload-container">
            <div className="uploadf"  style={{justifyContent:"center"}}>
              {uploadedFile && <span>{uploadedFile.name}</span>}
            </div>
            <label htmlFor="upload-file-input" className="upload-file-label">
              Upload
              <input
                id="upload-file-input"
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </Form.Item>

        <Form.Item
          label="Status Produk"
          className="form-item-label"
          name="statusProduk">
          <Radio.Group>
            <Radio value="Tersedia" className="radio-container">
              Tersedia
            </Radio>
            <Radio value="Habis" className="radio-containerh">
              Habis
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 70 }}>
          <div className="button-container">
            <Button onClick={showModal} className="cancel-button">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" className="save-button">
              Save
            </Button>
          </div>
        </Form.Item>
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

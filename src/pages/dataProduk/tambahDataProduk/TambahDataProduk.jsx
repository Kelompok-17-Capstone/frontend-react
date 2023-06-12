import React, { useState } from "react";
import {
  DatePicker,
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
import "./tambahDataProduk.css";

const App = () => {
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
      <h1 className="judul">Tambah Data Produk</h1>
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
        <Form.Item label="Nama Produk" name="namaProduk">
          <Input placeholder="Keyboard" className="nama-produk" />
        </Form.Item>

        <Row>
          <Col span={12} pull={8}>
            <Form.Item
              label="Deskripsi"
              className="Deskripsi"
              name="deskripsiProduk">
              <Input.TextArea
                placeholder="Deskripsi Produk"
                className="Deskripsis"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Jumlah Produk" name="jumlahProduk">
          <InputNumber
            placeholder="0"
            min={0}
            max={500}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "23%" }}
            step={1}
            addonAfter={
              <Button
                type="text"
                icon={<PlusOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentValue = form.getFieldValue("jumlahProduk");
                  form.setFieldsValue({
                    jumlahProduk: currentValue + 1,
                  });
                }}
              />
            }
            addonBefore={
              <Button
                type="text"
                icon={<MinusOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentValue = form.getFieldValue("jumlahProduk");
                  form.setFieldsValue({
                    jumlahProduk: currentValue - 1,
                  });
                }}
              />
            }
          />
        </Form.Item>

        <Form.Item label="Harga Produk" name="hargaProduk">
          <Input
            addonBefore={<span style={{ fontWeight: "bold" }}>RP</span>}
            placeholder="100000"
            style={{ backgroundColor: "#D9D5D5", width: "25%" }}
          />
        </Form.Item>

        <Form.Item label="Status Produk" name="statusProduk">
          <Radio.Group>
            <Radio value="Tersedia" className="radio-container">
              Tersedia
            </Radio>
            <Radio value="Habis" className="radio-container">
              Habis
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Upload Foto Produk" name="fotoProduk">
          <div className="upload-container">
            <input
              type="file"
              id="upload-file-input"
              className="upload-file-input"
              onChange={handleFileUpload}
            />
            <label htmlFor="upload-file-input" className="upload-file-label">
              <UploadOutlined /> Pilih File
            </label>
            {uploadedFile && <span>{uploadedFile.name}</span>}
          </div>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 40 }}>
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

export default TambahDataProduk;

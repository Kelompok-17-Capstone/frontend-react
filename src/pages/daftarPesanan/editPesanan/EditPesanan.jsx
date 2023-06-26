import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DatePicker, Form, Input, InputNumber, Radio, Button, Col, Row, Modal,Space } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './editPesanan.css';
import { useGetPesanan, useUpdatePesanan, useGetPesananById } from './hooks/useOrders';

const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { id } = useParams();
  const [formBio] = Form.useForm();
  const [isLoadingPesanan, data, getPesanan] = useGetPesanan();
  const [isLoadingUpdatePesanan, updatePesanan] = useUpdatePesanan();
  const [isLoadingGetPesananById, pesananData, getPesananById] = useGetPesananById();
  console.log(pesananData);
  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [open, setOpen] = useState(false);
  const [size] = useState('medium');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
    navigate("/daftar-pesanan");
  };

  const handleSave = (values) => {
    const id = rowData?.id;
    updateUser(id, values, () => {
      useGetUsers();
      handleCancel();
    });

    try {
      setModalContent("success");
      setIsModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalConfirm = () => {
    setIsModalVisible(false);
    navigate("/daftar-pesanan");
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  useEffect (() => {
    getPesananById(id);
  }, [id])

  return (
    <div className="bro">
      <h1 className="judul">Edit Daftar Pesanan</h1>
      <h3 className="judul1">Informasi Pesanan</h3>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 15 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{ maxWidth: 1400 }}
        fields={[
          {
            name: ["name"],
            value: pesananData?.name,
          },
          {
            name: ["address"],
            value: pesananData?.phone_number,
          },
          {
            name: ["product"],
            value: pesananData?.address,
          },
          {
            name: ["total_quantity"],
            value: pesananData?.status,
          },
          {
            name: ["total_price"],
            value: pesananData?.status,
          },
          {
            name: ["order_at"],
            value: pesananData?.status,
          },
          {
            name: ["arrived_at"],
            value: pesananData?.status,
          },
          {
            name: ["status"],
            value: pesananData?.status,
          },
        ]}
      >
        <Form.Item label="Nama Pesanan" name="name">
          <Input placeholder="Keyboard" className="nama-pesanan" />
        </Form.Item>

        <Row>
          <Col span={10} push={13}>
          </Col>
          <Col span={12} pull={8}>
            <Form.Item label="Alamat" className="alamat" name="address">
              <Input.TextArea placeholder="Jakarta" className="alamats" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Produk" name="product">
          <Input placeholder="Asus" className="produk" />
        </Form.Item>

        <Form.Item label="Jumlah Produk" name="total_quantity">
          <InputNumber
            placeholder="0"
            min={0}
            max={500}
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            style={{ width: '23%'}}
            addonAfter={
              <Button
                type="text"
                icon={<PlusOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentValue = form.getFieldValue('total_quantity');
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
                  const currentValue = form.getFieldValue('total_quantity');
                  form.setFieldsValue({
                    jumlahProduk: currentValue - 1,
                  });
                }}
              />
            }
          />
        </Form.Item>

        <Form.Item label="Harga Produk" name="total_price">
          <Input
            addonBefore={<span style={{ fontWeight: 'bold' }}>RP</span>}
            placeholder="100000"
            style={{ backgroundColor: '#D9D5D5', width: '25%' }}
          />
        </Form.Item>

        <Row>
          <Col span={12} push={2}>
            <Form.Item label="Waktu Pesan" name="order_at">
              <DatePicker placeholder="Waktu Pemesanan" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Waktu Sampai" name="arrived_at">
              <DatePicker placeholder="Waktu Sampai" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Status Pembayaran" name="status">
          <Radio.Group>
            <Radio value="Belum Bayar" className="radio-container">
              Belum Bayar
            </Radio>
            <Radio value="Dikemas" className="radio-container">
              Dikemas
            </Radio>
            <Radio value="Dikirim" className="radio-container">
              Dikirim
            </Radio>
            <Radio value="Diterima" className="radio-container">
              Diterima
            </Radio>
            <Radio value="Dikembalikan" className="radio-container">
              Dikembalikan
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 40 }}>
          <div className="button-container">
          <Space>
                <Button
                  loading={isLoadingUpdatePesanan}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "150px",
                    height: "40px",
                  }}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
  
                <Button
                  htmlType="submit"
                  loading={isLoadingUpdatePesanan}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                    height: "40px",
                  }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Space>
          </div>
        </Form.Item>
      </Form>

      <Modal
              centered
              open={isModalVisible}
              onCancel={() => setIsModalVisible(false)}
              footer={null}
              className="custom-modal"
            >
              {modalContent === "success" ? (
                <>
                  <h3 className="SuccessText">Success</h3>
                  <p>Data User Berhasil Diubah</p>
                  <Button
                    key="confirm"
                    type="primary"
                    onClick={handleModalConfirm}
                    className="btnLoginSuccess"
                  >
                    Confirm
                  </Button>
                </>
              ) : (
                <>
                  <h3 className="FailedText">Failed</h3>
                  <p>Data User Gagal Diubah</p>
                  <Button
                    key="try-again"
                    type="primary"
                    onClick={closeModal}
                    className="btnFailed"
                  >
                    Try Again
                  </Button>
                </>
              )}
            </Modal>

      <Modal
        title="Konfirmasi"
      >
        <p>Anda yakin ingin membatalkan?</p>
      </Modal>


    </div>
  );
};

export default App;
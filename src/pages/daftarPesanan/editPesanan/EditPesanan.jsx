import React, { useState } from 'react';
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
} from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './editPesanan.css';

const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isFailureModalVisible, setIsFailureModalVisible] = useState(false);
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
    const isFormEmpty = formValues.some((value) => value === undefined || value === '');

    if (isFormEmpty) {
      showFailureModal();message.error('Gagal mengirim. Pastikan semua form telah diisi.');
    } else {
      const { waktuPesan, waktuSampai } = values;
      if (waktuPesan && waktuSampai && waktuPesan.isAfter(waktuSampai)) {
        showFailureModal();message.error('Waktu pesan tidak boleh lebih besar dari waktu sampai.');
      } else {
        showSuccessModal();message.success('Form berhasil dikirim!');
      }
    }
  };
  


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
        onFinish={onFinish}
      >
        <Form.Item label="Nama Pesanan" name="namaPesanan">
          <Input placeholder="Keyboard" className="nama-pesanan" />
        </Form.Item>

        <Row>
          <Col span={10} push={13}>
            <label>Kode Pos :</label>
            <Form.Item name="kodePos">
              <Input
                className="form-kodepos"
                type="text"
                maxLength={8}
                placeholder="22112"
                style={{width: "80%" }}
              />
            </Form.Item>
          </Col>
          <Col span={12} pull={8}>
            <Form.Item label="Alamat" className="alamat" name="alamat">
              <Input.TextArea placeholder="Jakarta" className="alamats" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Produk" name="produk">
          <Input placeholder="Asus" className="produk" />
        </Form.Item>

        <Form.Item label="Jumlah Produk" name="jumlahProduk">
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
                  const currentValue = form.getFieldValue('jumlahProduk');
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
                  const currentValue = form.getFieldValue('jumlahProduk');
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
            addonBefore={<span style={{ fontWeight: 'bold' }}>RP</span>}
            placeholder="100000"
            style={{ backgroundColor: '#D9D5D5', width: '25%' }}
          />
        </Form.Item>

        <Row>
          <Col span={12} push={2}>
            <Form.Item label="Waktu Pesan" name="waktuPesan">
              <DatePicker placeholder="Waktu Pemesanan" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Waktu Sampai" name="waktuSampai">
              <DatePicker placeholder="Waktu Sampai" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Status Pembayaran" name="statusPembayaran">
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
          <Button type="primary" htmlType="submit" className="save-button">
              Save
            </Button>
            <Button className="cancel-button" onClick={showModal}>
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>

      <Modal
 title={<h2 style={{ textAlign: 'center', fontSize: '42px', color: '#33DF3A', fontFamily : 'Poppins' }}>Success</h2>}
        open={isSuccessModalVisible}
        footer={[
          <Button
            key="confirm-button"
            type="primary"
            className="confirm-button"
            onClick={handleSuccessModalConfirm}
          >
            Confirm
          </Button>,
        ]}
      >
        <p className="modal-content">Dafar Pesanan Berhasil Diubah</p>
      </Modal>

      <Modal
 title={<h2 style={{ textAlign: 'center', fontSize: '42px', color: 'red' , fontFamily : 'Poppins'}}>Failed</h2>}
  open={isFailureModalVisible}
  footer={[
    <Button
      key="try-again-button"
      type="primary"
      className="try-again-button"
      onClick={handleFailureModalTryAgain}
    >
      Try Again
    </Button>,
  ]}
>
  <p className="modal-content">Daftar Pesanan Gagal Diubah</p>
</Modal>

      <Modal
        title="Konfirmasi"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Anda yakin ingin membatalkan?</p>
      </Modal>


    </div>
  );
};

export default App;
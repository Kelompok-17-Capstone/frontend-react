import React, { useEffect, useState } from 'react';
import { Table, Tabs } from 'antd';
import { useGetPesanan, useGetPesananDikemas, useGetPesananDikirim, useGetPesananDiterima } from '../../hooks/useGetDataPesanan';
import { dataPesananTab, dataPesanananHeader } from './constants';

const TablePesanan = () => {
  const [currentTab, setCurrentTab] = useState(dataPesananTab[0].key);
  const [isLoadingPesanan, pesanan, getPesanan] = useGetPesanan();
  const [isLoadingPesananDikemas, pesananDikemas, getPesananDikemas] = useGetPesananDikemas();
  const [isLoadingPesananDikirim, pesananDikirim, getPesananDikirim] = useGetPesananDikirim();
  const [isLoadingPesananDiterima, pesananDiterima, getPesananDiterima] = useGetPesananDiterima();

  const onChangeTabs = (key) => {
    setCurrentTab(key);
    if (key === 'dikemas') {
      getPesananDikemas();
    } else if (key === 'dikirim'){
      getPesananDikirim();
    } else if (key === 'diterima') {
      getPesananDiterima();
    } else {
      getPesanan();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPesanan();
      setCurrentTab(dataPesananTab[0].key);
    };

    fetchData();
  }, []);

  const items = dataPesananTab;

  const tableColumns = dataPesanananHeader;
  const tableDataSource =
    currentTab === dataPesananTab[0].key
      ? pesanan
      : currentTab === dataPesananTab[1].key
      ? pesananDikemas
      : currentTab === dataPesananTab[2].key
      ? pesananDikirim
      : currentTab === dataPesananTab[3].key
      ? pesananDiterima
      : null;

  return (
    <div>
      <Tabs activeKey={currentTab} onChange={onChangeTabs}>
        {items.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.tab} />
        ))}
      </Tabs>
      <Table dataSource={tableDataSource} columns={tableColumns} loading={isLoadingPesanan} />
    </div>
  );
};


export default TablePesanan;

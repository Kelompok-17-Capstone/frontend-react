import React, { useEffect, useState } from 'react';
import { Table, Tabs } from 'antd';
import { useGetPesanan } from '../../hooks/useGetDataPesanan';
import { useLocation } from 'react-router-dom';

import { dataPesanananHeader } from './constants';

const TablePesanan = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [currentTab, setCurrentTab] = useState('dataPesanan');

  const [isLoadingPesanan, pesanan, getPesanan] = useGetPesanan();

  const onChangeTabs = (key) => {
    setCurrentTab(key);
  };

  const items = dataPesanananHeader;

  useEffect(() => {
    setCurrentTab('dataPesanan');
  }, [currentRoute]);

  useEffect(() => {
    if (currentRoute === '/daftar-pesanan' && currentTab === 'dataPesanan') {
      getPesanan();
    }
  }, [currentTab, currentRoute]);

  const tableColumns = dataPesanananHeader;
  const tableDataSource = currentRoute === '/data-pesanan' && currentTab === 'dataPesanan' ? pesanan : null;

  return (
    <div>
      <Tabs activeKey={currentTab} onChange={onChangeTabs}>
        {items.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.title} />
        ))}
      </Tabs>
      <Table
        dataSource={tableDataSource}
        columns={tableColumns}
        loading={isLoadingPesanan}
      />
    </div>
  );
};

export default TablePesanan;

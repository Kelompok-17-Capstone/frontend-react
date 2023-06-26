import React, { useEffect, useState } from 'react';
import { Table, Tabs } from 'antd';
import { useLocation } from 'react-router-dom';
import { dataProdukHeader, dataProdukTab} from './constants';
import { useGetProduct, useGetProductHabis, useGetProductTersedia } from '../../hooks/useGetData';


const TableComponent = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [currentTab, setCurrentTab] = useState(null);

  // API
  const [isLoadingProduct, product, getProduct] = useGetProduct();
  const [isLoadingProductTersedia, productTersedia, getProductTersedia] = useGetProductTersedia();
  const [isLoadingProductHabis, productHabis, getProductHabis] = useGetProductHabis();


  // Tabs
  const onChangeTabs = (key) => {
    setCurrentTab(key);
  };

  const getTableTab = () => {
      return dataProdukTab;
  };

  const items = getTableTab();

  useEffect(() => {
    setCurrentTab(null);
  }, [currentRoute]);

  useEffect(() => {
    if (currentRoute === '/data-produk') {
      if (currentTab === 'dataProduk') {
        getProduct();
      } else if (currentTab === 'produkTersedia') {
        getProductTersedia();
      } else if (currentTab === 'produkHabis') {
        getProductHabis();
      }
    }
  }, [currentTab, currentRoute]);

  useEffect(() => {
      setCurrentTab('dataProduk');
  }, [currentRoute]);

  let tableDataSource = null;

  if (currentRoute === '/data-produk') {
    if (currentTab === 'dataProduk') {
      tableDataSource = product;
    } else if (currentTab === 'produkTersedia') {
      tableDataSource = productTersedia;
    } else if (currentTab === 'produkHabis') {
      tableDataSource = productHabis;
    }
  } 

  return (
    <div>
      <Tabs activeKey={currentTab} onChange={onChangeTabs}>
        {items.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.tab} />
        ))}
      </Tabs>
      <Table dataSource={tableDataSource} columns={dataProdukHeader} />
    </div>
  );
};

export default TableComponent;

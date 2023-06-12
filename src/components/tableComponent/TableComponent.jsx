import React from 'react';
import { Table, Tabs } from 'antd';
import { useLocation } from 'react-router-dom';
import { dataPesananTab, dataPesanananHeader, dataProdukHeader, dataProdukTab, dataUserHeader, dataUserTab,  } from './constants';

const TableComponent = () => {
    const location = useLocation()
    const currentRoute = location.pathname

    const getTableColumns = () => {
        if (currentRoute === '/data-produk') {
            return dataProdukHeader
        } else if (currentRoute === '/data-user') {
            return dataUserHeader
        } else if (currentRoute === '/daftar-pesanan') {
            return dataPesanananHeader
        }
    }
    const columns = getTableColumns();

    // Tabs
    const onChangeTabs = (key) => {}
    const getTableTab = () => {
        if (currentRoute === '/data-produk') {
            return dataProdukTab
        } else if (currentRoute === '/data-user') {
            return dataUserTab
        } else if (currentRoute === '/daftar-pesanan') {
            return dataPesananTab
        }
    }

    const items = getTableTab();
    return (
        <div>
            <Tabs onChange={onChangeTabs}>
                {items.map((tab) => (
                    <Tabs.TabPane key={tab.key} tab={tab.tab} />
                ))}
            </Tabs>
            <Table columns={columns} />
        </div>
    );
}

export default TableComponent;

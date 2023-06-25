import React, { useEffect, useState } from "react";
import { Table, Tabs } from "antd";
import { useGetMember, useGetReguler, useGetUsers } from "../../hooks/useGetDataUsers";
import { dataUserHeader, dataUserTab } from "./constants";

const UserTable = () => {
  const [currentTab, setCurrentTab] = useState(dataUserTab[0].key);
  const [isLoadingUsers, users, getUsers] = useGetUsers()
  const [isLoadingMember, member, getMember] = useGetMember()
  const [isLoadingReguler, reguler, getReguler] = useGetReguler()


  const onChangeTabs = (key) => {
    setCurrentTab(key) 
      if (key === 'dataMember') {
        getMember();
      } else if (key === 'dataReguler') {
        getReguler();
      } else {
        getUsers()
      }
    }
    useEffect(() => {
      const fetchData = async () => {
        await getUsers()
        setCurrentTab(dataUserTab[0].key)
      } 
  
      fetchData()
    }, [])
  
    const items = dataUserTab;
  
    const tableColumns = dataUserHeader;
    const tableDataSource = 
      currentTab === dataUserTab[0].key
        ? users
        : currentTab === dataUserTab[1].key
        ? member
        : currentTab === dataUserTab[2].key
        ? reguler
        : null
  
        return (
          <div>
            <Tabs activeKey={currentTab} onChange={onChangeTabs}>
              {items.map((tab) => (
                <Tabs.TabPane key={tab.key} tab={tab.tab}/>
              ))}
            </Tabs>
            <Table dataSource={tableDataSource} columns={tableColumns}/>
          </div>
        )
  }




export default UserTable;

import { useEffect, useState } from "react";
import { Table, Tabs, message } from "antd";
import { useGetUserMember, useGetUserReguler, useGetUsers } from "../../hooks/useGetDataUsers";
import { dataUserHeader, dataUserTab } from "./constants";

const UserTable = () => {
  const [isLoadingUsers, users, getUsers] = useGetUsers();
  const [isLoadingMember, dataMember, getUserMember] = useGetUserMember();
  const [isLoadingReguler, dataReguler, getUserReguler] = useGetUserReguler();
  const [currentTab, setCurrentTab] = useState(dataUserTab[0].key);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentTab === "dataUser") {
          await getUsers();
        } else if (currentTab === "dataMember") {
          await getUserMember();
        } else if (currentTab === "dataReguler") {
          await getUserReguler();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        message.error(`${error.message}`);
      }
    };

    fetchData();
  }, [currentTab, getUsers, getUserMember, getUserReguler]);

  const handleTabChange = (key) => {
    setCurrentTab(key);
  };

  const getDataSource = () => {
    if (currentTab === "dataUser") {
      return users;
    } else if (currentTab === "dataMember") {
      return dataMember;
    } else if (currentTab === "dataReguler") {
      return dataReguler;
    }
    return [];
  };

  return (
    <div>
      <Tabs activeKey={currentTab} onChange={handleTabChange}>
        {dataUserTab.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.tab} />
        ))}
      </Tabs>
      <Table
        dataSource={getDataSource()}
        columns={dataUserHeader}
        loading={
          currentTab === "dataUser"
            ? isLoadingUsers
            : currentTab === "dataMember"
            ? isLoadingMember
            : isLoadingReguler
        }
      />
    </div>
  );
};

export default UserTable;

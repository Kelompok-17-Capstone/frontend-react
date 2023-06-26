import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetDashboardData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataDashboard, setDataDashboard] = useState({ users: [], orders: [], products: [] });

  const getDashboard = useCallback(async () => {
    try {
      const res = await api.getDashboardData();
      console.log({res})
      setDataDashboard({
        users : res?.data.data[0].users,
        orders : res?.data.data[0].orders,
        products : res?.data.data[0].products,
      });
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, dataDashboard, getDashboard];
};
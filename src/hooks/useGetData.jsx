import { useCallback, useState } from "react";
import { message } from "antd";
import { api } from "../api";

export const useGetProduct = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    const getData = useCallback(async () => {
      try {
        const res = await api.getProduct();
        console.log(res?.data);
        setData(res?.data);
      } catch (err) {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      } finally {
        setIsLoading(false);
      }
    }, []);
  
    return [isLoading, data, getData];
  };
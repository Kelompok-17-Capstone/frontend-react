import { useCallback, useState } from "react";
import { message } from "antd";
import { api } from "../api";

export const useGetProduct = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    const getData = useCallback(async () => {
      try {
        const res = await api.getProduct();
        setData(res?.data?.products);
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

export const useGetProductTersedia = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getProductTersedia = useCallback(async () => {
    try {
      const res = await api.getProductByStatus('tersedia'); // Use getProductByStatus method with 'tersedia' status
      setData(res?.data?.products);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getProductTersedia];
};

export const useGetProductHabis = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getProductHabisData = useCallback(async () => {
    try {
      const res = await api.getProductByStatus('habis'); // Use getProductByStatus method with 'habis' status
      setData(res?.data?.products);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getProductHabisData];
};

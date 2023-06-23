import { useCallback, useState } from 'react';
import { api } from '../api';
import { message } from 'antd';

export const useGetPesanan = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPesanan = useCallback(async () => {
    try {
      const res = await api.getPesanan();
      console.log(res);
      setData(res?.data?.orders || []);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getPesanan];
};

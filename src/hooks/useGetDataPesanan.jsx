import { useCallback, useState } from 'react';
import { api } from '../api';
import { message } from 'antd';

export const useGetPesanan = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPesanan = useCallback(async () => {
    try {
      const res = await api.getPesanan();
      console.log(res?.data?.orders || []);
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

export const useGetPesananDikemas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getPesananDikemas = useCallback(async () => {
    try {
      const res = await api.getPesananByStatus('dikemas');
      setData(res?.data?.orders)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`
      })
    } finally {
      setIsLoading(false)
    }
  }, []);

  return [isLoading, data, getPesananDikemas]
}

export const useGetPesananDikirim = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getPesananDikirim = useCallback(async () => {
    try {
      const res = await api.getPesananByStatus('dikirim');
      setData(res?.data.orders)
    } catch (err){
      message.open({
        type: 'error',
        content: `${err?.message}`
      })
    } finally{
      setIsLoading(false)
    }
  }, [])

  return [isLoading, data, getPesananDikirim]
}

export const useGetPesananDiterima = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const GetPesananDiterima = useCallback(async () => {
    try {
      const res = await api.getPesananByStatus('diterima')
      setData(res?.data.orders)
    } catch (err){
      message.open({
        type: 'error',
        content: `${err?.message}`
      })
    } finally{
      setIsLoading(false)
    }
  }, []);

  return [isLoading, data, GetPesananDiterima]
}

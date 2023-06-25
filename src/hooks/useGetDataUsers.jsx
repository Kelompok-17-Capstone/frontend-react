import { useCallback, useState } from "react";
import { api } from "../api";
import { message } from "antd";

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const res = await api.getUsers();
      console.log(res?.data?.data?.users || []);
      setData(res?.data?.data || [])
      console.log(res)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, data, getUsers]
};

export const useGetMember = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const getMember = useCallback(async () => {
    try {
      const res = await api.getMember('member')
      setData(res?.data?.users)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, data, getMember]
}

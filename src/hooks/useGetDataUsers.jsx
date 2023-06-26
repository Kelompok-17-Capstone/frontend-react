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
      setData(res?.data?.data)
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

export const useGetReguler = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  const getReguler = useCallback(async () => {
    try {
      const res = await api.getReguler('reguler')
      setData(res?.data?.data)
    } catch (err) {
      message.open({
        type: 'error',
        content: `${err?.message}`
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, data, getReguler]
}

export const useUpdateUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateData = useCallback(async (id, body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.updateUser(id, body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Berhasil update data",
      });
      setIsLoading(false);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, updateData];
}

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteData = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true);
      await api.deleteUser(id);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Berhasil delete data",
      });
      setIsLoading(false);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, deleteData];
};



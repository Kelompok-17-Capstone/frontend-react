import { useCallback, useState } from "react";
import { api } from "../../../../api";
import { message } from "antd";

export const useGetPesanan = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPesanan = useCallback(async () => {
    try {
      const res = await api.getPesanan();
      console.log(res?.data?.data?.users || []);
      setData(res?.data?.data || []);
      console.log(res);
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

export const useUpdatePesanan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateData = useCallback(async (id, body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.updatePesanan(id, body);
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
};

export const useDeleteData = () => {
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

export const useGetPesananById = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState()

  const getPesananById = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.getPesananById(id);
      if(res) {
        setData(res.data.user)
        console.log(res)
        onSuccess && onSuccess();
        message.open({
          type: "success",
          content: "Berhasil update data",
        });
        setIsLoading(false);
      }
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getPesananById];
};
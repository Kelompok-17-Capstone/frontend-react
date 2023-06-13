import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

// Read Data
export const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getUser();
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

// Create Data
export const usePostUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.createUser(body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Data baru berhasil dibuat",
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

  return [isLoading, createData];
};

// Update Data
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
};

// Delete Data
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

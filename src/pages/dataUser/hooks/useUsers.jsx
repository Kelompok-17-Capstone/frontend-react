import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";


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

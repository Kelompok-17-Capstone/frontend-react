import { useCallback, useState } from "react";
import { api } from "../../../api/index";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = useCallback((content) => {
    setModalVisible(true);
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setModalContent("");
  }, []);

  const login = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.postLogin(body);

      console.log({ res });

      if (res.status === 200) {
        const token = res.data?.token;
        localStorage.setItem("token", token);
        openModal("success");
        onSuccess && onSuccess();
      } else {
        openModal("failed");
      }
    } catch (err) {
      openModal("failed");
    } finally {
      setIsLoading(false);
    }
  }, [openModal]);

  return [isLoading, login, modalVisible, modalContent, closeModal];
};

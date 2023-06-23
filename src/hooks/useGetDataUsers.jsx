import { useCallback, useState } from "react";
import { api } from "../api";
import { message } from "antd";

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const res = await api.getUsers();
      setUsers(res?.data?.users);
    } catch (err) {
      message.error(`${err?.message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, users, getUsers];
};

export const useGetUserMember = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataMember, setDataMember] = useState([]);

  const getUserMember = useCallback(async () => {
    try {
      const res = await api.getUserByRole('member'); 
      setDataMember(res?.data?.users);
    } catch (err) {
      message.error(`${err?.message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, dataMember, getUserMember];
};

export const useGetUserReguler = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataReguler, setDataReguler] = useState([]);

  const getUserReguler = useCallback(async () => {
    try {
      const res = await api.getUserByRole('reguler'); 
      setDataReguler(res?.data?.users);
    } catch (err) {
      message.error(`${err?.message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, dataReguler, getUserReguler];
};

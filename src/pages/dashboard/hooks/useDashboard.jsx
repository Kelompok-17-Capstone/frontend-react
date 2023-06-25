import { useCallback, useState} from "react";
import { api } from "../../../api/index";
import { message } from "antd";

export const useGetDashboardData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    
    

    const getDashboardData = useCallback(async() => {
        try {
            const res = await api.getDashboardData();
            console.log({ res });
            setData(res.data?.users);
        } catch (err) {
            console.log({ err });
            message.open({
                type: "error",
                content: '$${err?.message'
            });
        } finally {
            setIsLoading(false);
            message.open({
                type : "success",
                content:'Berhasil Fetch Data!'
            });
        }
    
    }, []);
    return [isLoading, data, getDashboardData];
};

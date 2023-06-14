// import { useCallback, useState } from "react";
// import { api } from "../api/index";
// import { message } from "antd";

// export const useGetBiodata = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [data, setData] = useState();
  
//     const getData = useCallback(async () => {
//       try {
//         const res = await api.getProduct();
//         setData(res?.data);
//       } catch (err) {
//         message.open({
//           type: "error",
//           content: `${err?.message}`,
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     }, []);
  
//     return [isLoading, data, getData];
//   };
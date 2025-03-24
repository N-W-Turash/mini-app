import { QueryObserverResult, useQuery, keepPreviousData } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import apiService from "@/utils/api/apiService";

const fetchUsers = async (params?: any): Promise<AxiosResponse<any, any>> => {
  const { data } = await apiService.get<any>("/users", { params });
  return data;
};

export const useFetchUsers = (params: any): QueryObserverResult<any, any> => {
  return useQuery<any, any>({
    queryFn: () => fetchUsers(params),
    queryKey: ["users", params],
    placeholderData: keepPreviousData,
  });
};

import {
  QueryObserverResult,
  useQuery,
  keepPreviousData,
  UseBaseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import apiService from "@/utils/api/apiService";

const fetchUsers = async (
  params?: any,
): Promise<{ data: any; total: number | undefined }> => {
  const { data, headers } = await apiService.get<any>("/users", { params });
  return {
    data,
    total: headers?.["x-total-count"] ? Number(headers["x-total-count"]) : undefined,
  };
};

const addUser = async (payload?: any): Promise<AxiosResponse<any, any>> => {
  return await apiService.post(`/users`, payload);
};

const deleteUser = async (
  userId?: string | unknown,
): Promise<AxiosResponse<any, any>> => {
  return await apiService.delete(`/users/${userId}`);
};

export const useFetchUsers = (params: any): QueryObserverResult<any, any> => {
  return useQuery<any, any>({
    queryFn: () => fetchUsers(params),
    queryKey: ["users", params],
    placeholderData: keepPreviousData,
  });
};

export const useAddUser = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  any,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload?: any) => addUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useDeleteUser = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  unknown,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

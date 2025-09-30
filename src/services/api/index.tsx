import { RequestMethods } from '@/constants/enumValues';
import { API } from '@/constants/api';
import { createAxiosInstance } from './axiosConfig';

const defaultHeader = { 'Content-type': 'application/json' };

export const userDetailsAPI = async (data: any): Promise<any> => {
  return createAxiosInstance({
    url: API.authUrls.user_details,
    method: RequestMethods.Post,
    headers: { ...defaultHeader },
    data: data
  });
};

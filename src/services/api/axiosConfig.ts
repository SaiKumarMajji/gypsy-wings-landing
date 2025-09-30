import axios from 'axios';
import { API } from '@/constants/api';

export const createAxiosInstance = async (info: any) => {
    try {
        const { url, method, headers, data, params, onProgress } = info;
        const axiosInstance = axios.create({
            baseURL: API.baseURL[API.currentEnv as keyof typeof API.baseURL],
            headers
        });
        return await axiosInstance({
            url,
            method,
            headers,
            data,
            params

        });
    } catch (error: any) {
        if (error?.response) {
            if (
                error.response.data?.status_code === 'E-10010' ||
                error.response.data?.status_code === 'E-10016'
            )
                return error.response;
        }
        if (error.code === 'ERR_NETWORK') {
            return { data: { status_code: 'E-10074' } };
        }
        if (error.code === 'ECONNABORTED') {
            return { data: { status_code: 'E-10075' } };
        }
        return { data: { status_code: 'E-10001' } };
    }
};

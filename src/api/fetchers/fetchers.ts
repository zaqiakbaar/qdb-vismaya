import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IFetchers<D = unknown, P = Record<string, string | number | boolean | null | undefined>> {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    data?: D;
    config?: AxiosRequestConfig;
    params?: P;
}

export async function fetchers<T, D = unknown, P = Record<string, string | number | boolean | null | undefined>>({
    url,
    method = 'GET',
    data,
    config,
    params,
}: IFetchers<D, P>): Promise<T | undefined> {
    try {
        const response: AxiosResponse<T> = await axios({
            url,
            params,
            method,
            data,
            ...config,
        });
        return response.data;
    } catch {
        // TODO - Integrate Logs
    }
}

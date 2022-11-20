import { AxiosRequestConfig, AxiosResponse } from "axios";
export interface IRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (err: any) => any;
}
export interface IVNRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors;
  loading?: boolean;
}

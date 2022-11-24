import { AxiosRequestConfig, AxiosResponse } from "axios";
export interface IRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}
export interface IVNRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors<T>;
  loading?: boolean;
}


export interface Result<T = any> {
  code: number;
  message: string;
  result: T;
}

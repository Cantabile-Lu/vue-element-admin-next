import { AxiosRequestConfig } from "axios";
export interface RequestConfig extends AxiosRequestConfig {
  loading?: boolean;
}

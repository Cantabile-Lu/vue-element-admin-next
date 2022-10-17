import axios from "axios";
import type { AxiosInstance } from "axios";
import { RequestConfig } from "./type";

class Service {
  instance: AxiosInstance;
  loading?: boolean;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    // 拦截请求
    this.instance.interceptors.request.use(
      (config: RequestConfig) => {
        if (config.loading) {
          this.loading = config.loading;
        }
        return config;
      },
      (err) => {
        return err;
      }
    );

    // 拦截响应
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }
}

export default Service;

import axios from "axios";
import type { AxiosInstance } from "axios";
import { IRequestInterceptors, IVNRequestConfig } from "./type";
import { ElLoading } from "element-plus";
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading";

const DEFAULT_LOADING = false;
class Service {
  instance: AxiosInstance;
  showLoading: boolean;
  loading?: LoadingInstance;
  interceptors?: IRequestInterceptors;
  constructor(config: IVNRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.loading ?? DEFAULT_LOADING;
    // 实列拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //  全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            fullscreen: true,
            background: "rgba(195,195,195, 0.2)",
            text: "正在加载中"
          });
        }
        return config;
      },
      (err) => {
        this.loading?.close();
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        this.loading?.close();
        return response;
      },
      (err) => {
        this.loading?.close();
        return err;
      }
    );
  }
  request<T>(config: IVNRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单独处理config
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      if (config.loading) {
        this.showLoading = config.loading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          return err;
        })
        .finally(() => {
          this.showLoading = DEFAULT_LOADING;
        });
    });
  }
}

export default Service;

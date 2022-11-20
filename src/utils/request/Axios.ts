import axios from "axios";
import type { AxiosInstance } from "axios";
import { IRequestInterceptors, IVNRequestConfig } from "./type";
import { ElLoading } from "element-plus";
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
class Service {
  instance: AxiosInstance;
  loading?: LoadingInstance;
  interceptors?: IRequestInterceptors;
  constructor(config: IVNRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

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
        this.loading = ElLoading.service({
          lock: true,
          fullscreen: true,
          background: "rgba(195,195,195, 0.2)",
          text: "正在加载中"
        });
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        this.loading?.close();
        return response;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config: IVNRequestConfig): void {
    // 单独处理config
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
        console.log(res);
      }
    });
  }
}

export default Service;

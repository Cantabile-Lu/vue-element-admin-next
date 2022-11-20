import Service from "./Axios";
export const vnRequest = new Service({
  baseURL: "",
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      const token = "";
      if (token) {
        config.headers!.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },

    responseInterceptor: (res) => {
      const data = res.data;
      if (data.status === "success") {
        console.log(res);
      }
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

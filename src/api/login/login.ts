import { vnRequest } from "@/utils/request";
interface IAccount {
  username: string;
  password: string;
}

export function loginApi(data: IAccount): Promise<any> {
  return vnRequest.post({
    url: "/api/login",
    data
  });
}

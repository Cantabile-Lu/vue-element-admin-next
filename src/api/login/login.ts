import { vnRequest } from "@/utils/request";
interface IAccount {
  username: string;
  password: string;
}

interface IUserInfo {
  avatar: string;
  desc: string;
  homePath: string;
  password: string;
  realName: string;
  roles: any[];
  token: string;
  userId: string;
  username: string;
}
export function loginApi(data: IAccount): Promise<IUserInfo> {
  return vnRequest.post({
    url: "/api/login",
    data,
  });
}

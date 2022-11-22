import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "../utils";

export function createFakeUserList() {
  return [
    {
      userId: "1",
      username: "admin",
      realName: "admin",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640",
      desc: "manager",
      password: "123456",
      token: "fakeToken1",
      homePath: "/dashboard/analysis",
      roles: [
        {
          roleName: "Super Admin",
          value: "super"
        }
      ]
    },
    {
      userId: "2",
      username: "test",
      password: "123456",
      realName: "test user",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640",
      desc: "tester",
      token: "fakeToken2",
      homePath: "/dashboard/workbench",
      roles: [
        {
          roleName: "Tester",
          value: "test"
        }
      ]
    }
  ];
}

export default [
  {
    url: "/api/login",
    timeout: 200,
    method: "post",
    // @ts-ignore
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password
      );
      if (!checkUser) {
        console.log("Incorrect account or password！");
        return;
      }
      return resultSuccess(checkUser);
    }
  }
] as MockMethod[];

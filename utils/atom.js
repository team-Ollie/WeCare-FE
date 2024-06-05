import { atom } from "recoil";

export const isLogin = atom({
  key: "isLogin",
  default: false,
});

export const userData = atom({
  key: "loginUser",
  default: {
    username: "userName",
    teamName: "teamName",
    part: "part",
    name: "name",
    email: "email",
    accessToken: "accessToken",
    refreshToken: "refreshToken",
  },
});

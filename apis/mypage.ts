import client, { ResponseBody } from "./client";

interface GetMyInfoResponse extends ResponseBody {
  result: {
    nickname: string;
    level: number;
    loginId: string;
    isAdmin: boolean;
  };
}

interface PatchLogoutResponse {
  isSuccess: boolean;
  message: string;
}

async function getMyInfo(): Promise<GetMyInfoResponse> {
  const { data } = await client.get(`/users/myPage`);
  return data;
}

async function patchLogout(): Promise<PatchLogoutResponse> {
  const { data } = await client.patch(`/users/logout`);
  return data;
}

export { getMyInfo, patchLogout };

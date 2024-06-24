import client, { ResponseBody } from "./client";

interface GetMyInfoResponse extends ResponseBody {
  result: {
    nickname: string;
    level: number;
    loginId: string;
    isAdmin: boolean;
  };
}

interface PatchResponse {
  isSuccess: boolean;
  message: string;
}

async function getMyInfo(): Promise<GetMyInfoResponse> {
  const { data } = await client.get(`/users/myPage`);
  return data;
}

async function patchLogout(): Promise<PatchResponse> {
  const { data } = await client.patch(`/users/logout`);
  return data;
}

async function patchPasswordChange(body: {
  password: string;
  newPassword: string;
}): Promise<PatchResponse> {
  const { data } = await client.patch(`/users/editPassword`, body);
  return data;
}

export { getMyInfo, patchLogout, patchPasswordChange };

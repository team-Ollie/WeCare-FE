import client, { ResponseBody } from "./client";

interface GetMyInfoResponse extends ResponseBody {
  result: {
    nickname: string;
    level: number;
    loginId: string;
    isAdmin: boolean;
  };
}

async function getMyInfo(): Promise<GetMyInfoResponse> {
  const { data } = await client.get(`/users/myPage`);
  return data;
}

export { getMyInfo };

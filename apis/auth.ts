import client from "./client";

export const SignIn = async (userData: {
  loginId: string;
  password: string;
}) => {
  try {
    const response = await client.post(
      "/users/login",
      {
        loginId: userData.loginId,
        password: userData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // 200 이외
      console.error("서버 응답 오류:", error.response.data);
    } else if (error.request) {
      // 요청이 전송되었으나 응답을 받지 못한 경우
      console.error("응답 없음:", error.request);
    } else {
      // 요청을 설정하는 도중에 발생한 오류
      console.error("요청 설정 오류:", error.message);
    }
    throw error;
  }
};

export interface userProps {
  loginId: string;
  password: string;
  nickname: string;
  identifier: string;
  centerIdx: number;
}

export const SignUp = async (userData: userProps) => {
  try {
    const response = await client.post("/users/signup", {
      loginId: userData.loginId,
      password: userData.password,
      nickname: userData.nickname,
      identifier: userData.identifier,
      centerIdx: userData.centerIdx,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error();
    }
    throw error;
  }
};

export type centerProps = {
  centerIdx: number;
  name: string;
};

export interface getCenterListBody {
  ceterList: centerProps[];
}

export const getCenterList = async () => {
  try {
    const response = await client.get("/users/signupView");
    return response.data.result.ceterList;
  } catch (error) {
    if (error.response) {
      console.error(error.response);
    }
    throw error;
  }
};

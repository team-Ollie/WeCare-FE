import client from "./client";

export const Signin = async (userData: {
  loginId: String;
  password: String;
}) => {
  const response = await client.post(
    "/users/login",
    {
      loginId: userData.loginId,
      password: userData.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "no-auth": "true",
      },
    },
  );
  return response.data;
};

import axios from "axios";

interface ResponseBody {
  isSuccess: boolean;
  code: number;
  message: string;
}

const setTokenFromLocalStorage = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};

const getTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return null;
  }
  return accessToken;
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
  },
  validateStatus: (status) => {
    return status < 300;
  },
});

client.interceptors.request.use(
  async (config) => {
    if (typeof document !== "undefined") {
      const token = getTokenFromLocalStorage();
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
export type { ResponseBody };

import { type Auth } from "@/models/auth.model";
import authApi from "@/api/auth.api";
import { AxiosError, isAxiosError } from "axios";

const handleAxiosError = (error: AxiosError | unknown) => {
  console.error("에러 발생: ", error);
  if (isAxiosError(error) && error.response?.data) {
    return error.response.data;
  }
};

export const useAuth = () => {
  const signup = async (data: Auth) => {
    try {
      return await authApi.signup(data);
    } catch (error) {
      return handleAxiosError(error);
    }
  };

  const checkEmail = async (email: Pick<Auth, "email">) => {
    try {
      return await authApi.checkEmail(email);
    } catch (error) {
      return handleAxiosError(error);
    }
  };

  const checkNickname = async (nickname: Pick<Auth, "nickname">) => {
    try {
      return await authApi.checkNickname(nickname);
    } catch (error) {
      return handleAxiosError(error);
    }
  };

  const login = async (data: Pick<Auth, "email" | "password">) => {
    try {
      return await authApi.login(data);
    } catch (error) {
      return handleAxiosError(error);
    }
  };

  return { signup, checkEmail, checkNickname, login };
};

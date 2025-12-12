import { type Auth } from "@/models/auth.model";
import authApi from "@/api/auth.api";
import type { AxiosError } from "axios";

export const useAuth = () => {
  const signup = async (data: Auth) => {
    try {
      return await authApi.signup(data);
    } catch (error) {
      console.error(error);
    }
  };

  const checkEmail = async (email: Pick<Auth, "email">) => {
    try {
      return await authApi.checkEmail(email);
    } catch (error: AxiosError | unknown) {
      console.error(error);
      return error.response.data;
    }
  };

  const checkNickname = async (nickname: Pick<Auth, "nickname">) => {
    try {
      return await authApi.checkNickname(nickname);
    } catch (error) {
      console.error(error);
    }
  };

  return { signup, checkEmail, checkNickname };
};

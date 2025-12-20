import type { Auth } from "@/entities/auth/model/auth.model";
import authApi from "@/shared/api/auth.api";
import { errorHandler } from "@/shared/lib/error-handler";
import type { LoginResponse, BaseResponse } from "@/shared/types/auth.type";

export const authService = {
  signup: async (data: Auth) => {
    try {
      return await authApi.signup(data);
    } catch (error) {
      return errorHandler<BaseResponse>(error);
    }
  },
  login: async (data: Pick<Auth, "email" | "password">) => {
    try {
      return await authApi.login(data);
    } catch (error) {
      return errorHandler<LoginResponse>(error);
    }
  },
  logout: async () => {
    try {
      return await authApi.logout();
    } catch (error) {
      return errorHandler<BaseResponse>(error);
    }
  },
};

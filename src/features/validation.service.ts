import type { Auth } from "@/entities/auth/model/auth.model";
import authApi from "@/shared/api/auth.api";
import { errorHandler } from "@/shared/lib/error-handler";
import type { CheckDuplicateResponse } from "@/shared/types/auth.type";

export const validationService = {
  checkEmail: async (email: Pick<Auth, "email">) => {
    try {
      return await authApi.checkEmail(email);
    } catch (error) {
      return errorHandler<CheckDuplicateResponse>(error);
    }
  },
  checkNickname: async (nickname: Pick<Auth, "nickname">) => {
    try {
      return await authApi.checkNickname(nickname);
    } catch (error) {
      return errorHandler<CheckDuplicateResponse>(error);
    }
  },
};

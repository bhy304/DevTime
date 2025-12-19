import type { BaseResponse } from "@/entities/auth/model/auth.model";
import { isAxiosError, type AxiosError } from "axios";

export const errorHandler = (error: AxiosError | unknown): BaseResponse => {
  console.error("에러 발생:", error);

  if (isAxiosError(error) && error.response?.data) {
    return error.response.data;
  }

  return {
    success: false,
    message: "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
  };
};

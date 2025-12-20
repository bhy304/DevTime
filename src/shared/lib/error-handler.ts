import { isAxiosError, type AxiosError } from "axios";
import type { BaseResponse } from "@/entities/auth/model/auth.model";

export const errorHandler = <T extends BaseResponse>(error: AxiosError | unknown): T => {
  console.error("에러 발생:", error);

  if (isAxiosError(error) && error.response?.data) {
    return error.response.data as T;
  }

  return {
    success: false,
    message: "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
  } as T;
};

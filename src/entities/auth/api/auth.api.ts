import HttpClient from "@/shared/api/http-client";
import type { Auth } from "@/entities/auth/model/auth.model";
import type {
  BaseResponse,
  CheckDuplicateResponse,
  LoginResponse,
  RefreshTokenResponse,
} from "@/entities/auth/model/auth.model";

class AuthAPI extends HttpClient {
  signup = async (data: Auth): Promise<BaseResponse> => {
    return await this.post("/signup", data);
  };

  checkEmail = async (email: Pick<Auth, "email">): Promise<CheckDuplicateResponse> => {
    return await this.get("/signup/check-email", { params: email });
  };

  checkNickname = async (nickname: Pick<Auth, "nickname">): Promise<CheckDuplicateResponse> => {
    return await this.get("/signup/check-nickname", { params: nickname });
  };

  login = async (data: Pick<Auth, "email" | "password">): Promise<LoginResponse> => {
    return await this.post("/auth/login", data);
  };

  logout = async (): Promise<BaseResponse> => {
    return await this.post("/auth/logout");
  };

  refreshToken = async (refreshToken: string): Promise<RefreshTokenResponse> => {
    return this.post("/auth/refresh", { refreshToken });
  };
}

export default new AuthAPI();

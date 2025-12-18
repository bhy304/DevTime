import { type Auth } from "@/entities/auth/model/auth.model";
import authApi from "@/shared/api/auth.api";
import { errorHandler } from "@/shared/lib/error-handler";
import { useAuthStore } from "./authStore";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setUser, setTokens, clearAuth } = useAuthStore();

  const signup = async (data: Auth) => {
    try {
      return await authApi.signup(data);
    } catch (error) {
      return errorHandler(error);
    }
  };

  const checkEmail = async (email: Pick<Auth, "email">) => {
    try {
      return await authApi.checkEmail(email);
    } catch (error) {
      return errorHandler(error);
    }
  };

  const checkNickname = async (nickname: Pick<Auth, "nickname">) => {
    try {
      return await authApi.checkNickname(nickname);
    } catch (error) {
      return errorHandler(error);
    }
  };

  const login = async (data: Pick<Auth, "email" | "password">) => {
    try {
      const response = await authApi.login(data);
      if (response && response.success) {
        setTokens(response.accessToken, response.refreshToken);
        setUser({ email: data.email });
      }
      return response;
    } catch (error) {
      return errorHandler(error);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      return errorHandler(error);
    } finally {
      clearAuth();
      navigate("/login");
    }
  };

  return { signup, checkEmail, checkNickname, login, logout };
};

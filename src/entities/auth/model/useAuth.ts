import { type Auth } from '@/entities/auth/model/auth.model';
import authApi from '@/shared/api/auth.api';
import { errorHandler } from '@/shared/lib/error-handler';

export const useAuth = () => {
  const signup = async (data: Auth) => {
    try {
      return await authApi.signup(data);
    } catch (error) {
      return errorHandler(error);
    }
  };

  const checkEmail = async (email: Pick<Auth, 'email'>) => {
    try {
      return await authApi.checkEmail(email);
    } catch (error) {
      return errorHandler(error);
    }
  };

  const checkNickname = async (nickname: Pick<Auth, 'nickname'>) => {
    try {
      return await authApi.checkNickname(nickname);
    } catch (error) {
      return errorHandler(error);
    }
  };

  const login = async (data: Pick<Auth, 'email' | 'password'>) => {
    try {
      return await authApi.login(data);
    } catch (error) {
      return errorHandler(error);
    }
  };

  return { signup, checkEmail, checkNickname, login };
};

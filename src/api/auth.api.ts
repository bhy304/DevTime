import HttpClient from './http-client';
import type { Auth } from '@/models/auth.model';

interface Response {
  success: boolean;
  message: string;
  available?: boolean;
}

class AuthAPI extends HttpClient {
  signup = async (data: Auth): Promise<Response> => {
    return await this.post('/signup', data);
  };

  checkEmail = async (email: Pick<Auth, 'email'>): Promise<Response> => {
    return await this.get('/signup/check-email', { params: email });
  };

  checkNickname = async (nickname: Pick<Auth, 'nickname'>): Promise<Response> => {
    return await this.get('/signup/check-nickname', { params: nickname });
  };
}

export default new AuthAPI();

export interface Auth {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  terms: true;
}

export interface BaseResponse {
  success: boolean;
  message: string;
}

export interface LoginResponse extends BaseResponse {
  accessToken: string;
  refreshToken: string;
  isFirstLogin: boolean;
  isDuplicateLogin: boolean;
}

export interface RefreshTokenResponse {
  success: boolean;
  accessToken: string;
}

export interface CheckDuplicateResponse extends BaseResponse {
  available: boolean;
}

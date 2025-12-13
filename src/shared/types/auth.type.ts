// signup, logout
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

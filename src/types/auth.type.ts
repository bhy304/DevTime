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
  refreshToken: string;
}

export interface CheckDuplicateResponse extends BaseResponse {
  available: boolean;
}

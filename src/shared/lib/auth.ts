const AUTH_KEY = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(AUTH_KEY.ACCESS_TOKEN, accessToken);
  localStorage.setItem(AUTH_KEY.REFRESH_TOKEN, refreshToken);
};

export const getToken = (token: string) => {
  return localStorage.getItem(token);
};

export const removeTokens = () => {
  localStorage.removeItem(AUTH_KEY.ACCESS_TOKEN);
  localStorage.removeItem(AUTH_KEY.REFRESH_TOKEN);
};
